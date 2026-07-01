import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { catchError, of, tap } from 'rxjs';
import { ITokenResponse } from '../interfaces/ITokenResponse';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  http = inject(HttpClient);
  baseApiUrl = environment.apiBaseUrl;
  cookieService = inject(CookieService);

  accessToken: string | null = null;
  refreshToken: string | null = null;

  login(payload: { username: string; password: string }) {
    const formData = new FormData();
    formData.append('username', payload.username);
    formData.append('password', payload.password);
    return this.http.post<ITokenResponse>(`${this.baseApiUrl}/auth/token`, formData).pipe(
      tap((val) => {
        this.accessToken = val.access_token;
        this.refreshToken = val.refresh_token;
        this.cookieService.set('access_token', val.access_token);
        this.cookieService.set('refresh_token', val.refresh_token);
      }),
      catchError((err) => {
        console.error(err);
        return of(null);
      }),
    );
  }

  get isAuth() {
    if (!this.accessToken) {
      this.accessToken = this.cookieService.get('access_token') || null;
    }

    return this.accessToken !== null;
  }
}

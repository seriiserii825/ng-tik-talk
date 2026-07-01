import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { catchError, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  http = inject(HttpClient);
  baseApiUrl = environment.apiBaseUrl;

  login(payload: { username: string; password: string }) {
    const formData = new FormData();
    formData.append('username', payload.username);
    formData.append('password', payload.password);
    return this.http.post(`${this.baseApiUrl}/auth/token`, formData).pipe(
      catchError((err) => {
        console.error(err);
        return of(null);
      }),
    );
  }
}

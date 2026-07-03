import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { catchError, firstValueFrom, map, of, tap } from 'rxjs';
import { environment } from '../../environments/environment';
import { IProfile } from '../interfaces/IProfile';
import { IWithPagination } from '../interfaces/IWithPagination';

@Injectable({
  providedIn: 'root',
})
export class ProfileService {
  http = inject(HttpClient);
  baseApiUrl = environment.apiBaseUrl;

  me = signal<IProfile | null>(null);

  getTestAccounts() {
    return this.http.get<IProfile[]>(`${this.baseApiUrl}/account/test_accounts`).pipe(
      catchError((err) => {
        console.error(err);
        return of([]);
      }),
    );
  }

  getSubscribersShortList() {
    return this.http
      .get<IWithPagination<IProfile>>(`${this.baseApiUrl}/account/subscriptions/`)
      .pipe(
        map((data) => data.items.slice(0, 3)),
        catchError((err) => {
          console.error(err);
          return of([] as IProfile[]);
        }),
      );
  }

  getMe() {
    return this.http.get<IProfile>(`${this.baseApiUrl}/account/me`).pipe(
      tap((profile) => {
        this.me.set(profile);
      }),
      catchError((err) => {
        console.error(err);
        return of(null);
      }),
    );
  }

  onInit() {
    firstValueFrom(this.getMe()).catch((err) => {
      console.error(err);
    });
  }
}

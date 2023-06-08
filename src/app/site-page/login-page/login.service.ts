import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(private http: HttpClient) {}

  login({ email, password }: any, headers: any) {
    const payload = { email, password };
    return this.http
      .post('https://reqres.in/api/login', payload, { headers: headers })
      .pipe(
        tap((response: any) => {
          console.log('response', response);
          // localstorage set işlemi.
          localStorage.setItem('token', response.token);
          window.location.href = '';
        })
      );
  }
}

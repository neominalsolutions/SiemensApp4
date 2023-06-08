import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs';
import jwt_decode from 'jwt-decode';

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
          const token = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyLCJyb2xlIjoiYWRtaW4sbWFuYWdlciIsInBlcm1pc3Npb24iOlsidXNlci1jcmVhdGUiLCJyb2xlLWRlbGV0ZSJdfQ.jQ1YgQksbk0fmbL7pM6q5qekvytUimsEhJecyaqT1kc`;
          localStorage.setItem('token', token);

          const decoded = jwt_decode(token);

          localStorage.setItem('userInfo', JSON.stringify(decoded));
          window.location.href = '';
        })
      );
  }
}

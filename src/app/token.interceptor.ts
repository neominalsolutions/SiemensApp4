import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    console.log('req', request);

    const token = localStorage.getItem('token');

    if (token != undefined) {
      const req = request.clone({
        headers: request.headers.append('Authorization', `Bearer ${token}`),
      });

      return next.handle(req);
    }

    return next.handle(request);
  }
}

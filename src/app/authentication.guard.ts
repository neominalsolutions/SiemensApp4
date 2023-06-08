import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationGuard {
  constructor(private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    // async işlemler için Observable<boolean>
    // yapılan istek kesilip önce burayı method içine request eğer request başarılı değilse return false dönerek istek kesilir.

    console.log('route', route);
    console.log('state', state);

    const token = localStorage.getItem('token');

    if (token == undefined) {
      this.router.navigate(['login']);
      return false;
    }

    return true;
  }
}

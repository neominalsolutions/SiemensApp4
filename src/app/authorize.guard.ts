import { Injectable } from '@angular/core';
import {
  ActivatedRoute,
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
export class AuthorizeGuard {
  /**
   *
   */
  constructor(private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    const url = route.url; // users url roleId:1, email:test-user

    console.log('this.ac.snapshot.data', route.data);

    const roleName = (route.data as any).roleName;

    console.log('roleName', roleName);
    console.log('url', url);

    const userInfo = localStorage.getItem('userInfo');

    if (userInfo != undefined) {
      const userObj: any = JSON.parse(userInfo);

      console.log('userObj', userObj);

      if (userObj.role.includes(roleName)) {
        return true;
      }
    }

    this.router.navigate(['login']);
    return false;
  }
}

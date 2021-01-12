import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

import { AuthService } from './auth.service';

@Injectable()
export class AuthGuard implements CanActivate {

  /*
  Responsible for checking if user is authenticated to access the routes.
  If user isn't authenticated for instance when token timer has expired, this guard will redirect user to the login page.
  */
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
    ): boolean | import("@angular/router").UrlTree | Observable<boolean | import("@angular/router").UrlTree> | Promise<boolean | import("@angular/router").UrlTree> {
      const isAuth = this.authService.getIsAuth();
      if(!isAuth) {
        this.router.navigate(['/auth/login']);
      }
      return true;
  }

}

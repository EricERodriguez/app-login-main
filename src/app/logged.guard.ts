import { Injectable } from '@angular/core';
import { CanLoad, Route, Router, UrlSegment, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from './login/login.service';

@Injectable({
  providedIn: 'root'
})
export class LoggedGuard implements CanLoad {
  constructor(
    private loginService: LoginService,
    private router:Router
    ) { }
  canLoad(): boolean | UrlTree  {
    if (this.loginService.isLogged) {
      return true;
    }
    return this.router.parseUrl("/login/signin")
  }
}

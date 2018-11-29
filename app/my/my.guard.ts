import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class MyGuard implements CanActivate {
  public canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if (ondomain) {
      window.location.href = 'https://github.com/Skaaala/Example' + state.url;
      return false;
    }

    return true;
  }
}

import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from '../core/store/app.state';
import { MyAction } from '../core/store/my/my.action';
import { UserFeedAction } from '../core/store/user-feed/user-feed.action';

@Injectable({
  providedIn: 'root'
})
export class MyCleanUpGuard implements CanActivate {
  public constructor(private store$: Store<AppState>) {}

  public canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    this.store$.dispatch(new MyAction.Clear());
    this.store$.dispatch(new UserFeedAction.Clear());
    return true;
  }
}

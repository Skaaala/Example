import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Action, Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { catchError, filter, map, mergeMap, withLatestFrom } from 'rxjs/operators';
import { MyApiService } from '../../api/my-api.service';
import { MapPreviewDto } from '../../dto/map-results.dto';
import { MyMenuDto } from '../../dto/my-menu.dto';
import { AppState } from '../app.state';
import { CommonAction } from '../common/common.action';
import { MyAction, MyActionType } from './my.action';
import { selectFollowedMapsLoaded, selectMyMenu, selectMyMapsLoaded } from './my.state';

@Injectable()
export class MyEffects {
  @Effect()
  public getMenu$: Observable<Action> = this.actions$.pipe(
    ofType<MyAction.GetMenu>(MyActionType.GET_MENU),
    withLatestFrom(this.store$.select(selectMyMenu)),
    filter(([action, menu]) => !menu || action.payload.force),
    mergeMap(() =>
      this.myApiService.getMyMenu().pipe(
        map((menu: MyMenuDto) => new MyAction.GetMenuSuccess({ menu })),
        catchError((error) => of(new CommonAction.HandleError({ error })))
      )
    )
  );

  @Effect()
  public getFollowedMaps$: Observable<Action> = this.actions$.pipe(
    ofType<MyAction.GetFollowedMaps>(MyActionType.GET_FOLLOWED_MAPS),
    withLatestFrom(this.store$.select(selectFollowedMapsLoaded)),
    filter(([action, loaded]) => !loaded || action.payload.force),
    mergeMap(() =>
      this.myApiService.getFollowedMaps().pipe(
        map((followedMaps: MapPreviewDto[]) => new MyAction.GetFollowedMapsSuccess({ followedMaps })),
        catchError((error) => of(new CommonAction.HandleError({ error })))
      )
    )
  );

  @Effect()
  public getMyMaps$: Observable<Action> = this.actions$.pipe(
    ofType<MyAction.GetMyMaps>(MyActionType.GET_MY_MAPS),
    withLatestFrom(this.store$.select(selectMyMapsLoaded)),
    filter(([action, loaded]) => !loaded || action.payload.force),
    mergeMap(() =>
      this.myApiService.getMyMaps().pipe(
        map((myMaps: MapPreviewDto[]) => new MyAction.GetMyMapsSuccess({ myMaps })),
        catchError((error) => of(new CommonAction.HandleError({ error })))
      )
    )
  );

  public constructor(private actions$: Actions, private myApiService: MyApiService, private store$: Store<AppState>) {}
}

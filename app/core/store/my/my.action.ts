import { Action } from '@ngrx/store';
import { MapPreviewDto } from '../../dto/map-results.dto';
import { MyMenuDto } from '../../dto/my-menu.dto';

export enum MyActionType {
  GET_MENU = '[My] Get Menu',
  GET_MENU_SUCCESS = '[My] Get Menu :: Success',

  GET_FOLLOWED_MAPS = '[My] Get Followed Maps',
  GET_FOLLOWED_MAPS_SUCCESS = '[My] Get Followed Maps :: Success',

  GET_MY_MAPS = '[My] Get My Maps',
  GET_MY_MAPS_SUCCESS = '[My] Get My Maps :: Success',

  CLEAR = '[My] Clear'
}

export namespace MyAction {
  export class GetMenu implements Action {
    public readonly type = MyActionType.GET_MENU;

    public constructor(public payload: { force?: boolean }) {}
  }

  export class GetMenuSuccess implements Action {
    public readonly type = MyActionType.GET_MENU_SUCCESS;

    public constructor(public payload: { menu: MyMenuDto }) {}
  }

  export class GetFollowedMaps implements Action {
    public readonly type = MyActionType.GET_FOLLOWED_MAPS;

    public constructor(public payload: { force?: boolean }) {}
  }

  export class GetFollowedMapsSuccess implements Action {
    public readonly type = MyActionType.GET_FOLLOWED_MAPS_SUCCESS;

    public constructor(public payload: { followedMaps: MapPreviewDto[] }) {}
  }

  export class GetMyMaps implements Action {
    public readonly type = MyActionType.GET_MY_MAPS;

    public constructor(public payload: { force?: boolean }) {}
  }

  export class GetMyMapsSuccess implements Action {
    public readonly type = MyActionType.GET_MY_MAPS_SUCCESS;

    public constructor(public payload: { myMaps: MapPreviewDto[] }) {}
  }

  export class Clear implements Action {
    public readonly type = MyActionType.CLEAR;
  }

  export type All =
    | GetMenu
    | GetMenuSuccess
    | GetFollowedMaps
    | GetFollowedMapsSuccess
    | GetMyMaps
    | GetMyMapsSuccess
    | Clear;
}

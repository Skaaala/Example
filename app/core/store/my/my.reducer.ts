import { LoadState } from '../load-state';
import { MyAction, MyActionType } from './my.action';
import { initialMyState, MyState } from './my.state';

export function myReducer(
  state: MyState = initialMyState,
  action: MyAction.All
): MyState {
  switch (action.type) {
    case MyActionType.GET_MENU_SUCCESS:
      return { ...state, menu: action.payload.menu };
    case MyActionType.GET_FOLLOWED_MAPS_SUCCESS:
      return { ...state, followedMaps: action.payload.followedMaps, followedMapsLoad: LoadState.Loaded };
    case MyActionType.GET_MY_MAPS_SUCCESS:
      return { ...state, myMaps: action.payload.myMaps, myMapsLoad: LoadState.Loaded };
    case MyActionType.CLEAR:
      return initialMyState;
    default:
      return state;
  }
}

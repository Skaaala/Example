import { createSelector } from '@ngrx/store';
import { MapPreviewDto } from '../../dto/map-results.dto';
import { MyMenuDto } from '../../dto/my-menu.dto';
import { AppState } from '../app.state';
import { LoadState } from '../load-state';

export interface MyState {
  menu: MyMenuDto;

  followedMaps: MapPreviewDto[];
  followedMapsLoad: LoadState;

  myMaps: MapPreviewDto[];
  myMapsLoad: LoadState;
}

export const initialMyState: MyState = {
  menu: null,
  followedMaps: [],
  followedMapsLoad: LoadState.NotLoaded,
  myMaps: [],
  myMapsLoad: LoadState.NotLoaded
};

export const selectMyState = (state: AppState) => state.my;

export const selectMyMenu = createSelector(selectMyState, (state) => state.menu);

export const selectFollowedMaps = createSelector(selectMyState, (state) => state.followedMaps);
export const selectFollowedMapsLoading = createSelector(
  selectMyState,
  (state) => state.followedMapsLoad === LoadState.Loading
);
export const selectFollowedMapsLoaded = createSelector(
  selectMyState,
  (state) => state.followedMapsLoad === LoadState.Loaded
);

export const selectMyMaps = createSelector(selectMyState, (state) => state.myMaps);
export const selectMyMapsLoading = createSelector(
  selectMyState,
  (state) => state.myMapsLoad === LoadState.Loading
);
export const selectMyMapsLoaded = createSelector(
  selectMyState,
  (state) => state.myMapsLoad === LoadState.Loaded
);

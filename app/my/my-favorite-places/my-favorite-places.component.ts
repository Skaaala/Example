import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { MetaTitleTags } from '../../services/meta-title-tags/metaTitleTags.service';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from '../../core/store/app.state';
import { TranslatePipe } from '../../pipes/translate/translate.pipe';
import {
  selectUserFavoritePoisList,
  selectUserFavoritePoisLoading
} from '../../core/store/user-favorite-pois/user-favorite-pois.state';
import { UserFavoritePoisAction } from '../../core/store/user-favorite-pois/user-favorite-pois.action';
import { PoiDto } from '../../core/dto/poi.dto';

@Component({
  selector: 'my-favorite-places',
  templateUrl: './my-favorite-places.component.html',
  styleUrls: ['./my-favorite-places.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MyFavoritePlacesComponent implements OnInit {
  loadingTemplate = Array.from(Array(14).keys());
  myFavoritePlaces$: Observable<PoiDto[]>;
  myFavoritePlacesLoading$: Observable<boolean>;

  constructor(
    private metaTitleTags: MetaTitleTags,
    private store$: Store<AppState>,
    private translate: TranslatePipe
  ) {}

  ngOnInit() {
    this.myFavoritePlacesLoading$ = this.store$.pipe(select(selectUserFavoritePoisLoading));
    this.myFavoritePlaces$ = this.store$.pipe(select(selectUserFavoritePoisList));
    this.store$.dispatch(new UserFavoritePoisAction.Get());

    this.setTitle();
  }

  private setTitle() {
    const titlePrefix = this.translate.transform('front_title_my-favorite-places', 'Favorite Places');
    this.metaTitleTags.setTitle(titlePrefix);
  }
}

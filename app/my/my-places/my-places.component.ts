import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { MyPlaceDto } from '../../core/dto/my-place.dto';
import { AppState } from '../../core/store/app.state';
import { select, Store } from '@ngrx/store';
import { selectUserPoisList, selectUserPoisLoading } from '../../core/store/user-pois/user-pois.state';
import { UserPoisAction } from '../../core/store/user-pois/user-pois.action';
import { TranslatePipe } from '../../pipes/translate/translate.pipe';
import { MetaTitleTags } from '../../services/meta-title-tags/metaTitleTags.service';

@Component({
  selector: 'my-places',
  templateUrl: './my-places.component.html',
  styleUrls: ['./my-places.component.scss']
})
export class MyPlacesComponent implements OnInit {
  loadingTemplate = Array.from(Array(14).keys());
  myPlaces$: Observable<MyPlaceDto[]>;
  myPlacesLoading$: Observable<boolean>;

  constructor(
    private metaTitleTags: MetaTitleTags,
    private store$: Store<AppState>,
    private translate: TranslatePipe
  ) {}

  ngOnInit() {
    this.myPlacesLoading$ = this.store$.pipe(select(selectUserPoisLoading));
    this.myPlaces$ = this.store$.pipe(select(selectUserPoisList));
    this.store$.dispatch(new UserPoisAction.GetFirstPage());

    this.setTitle();
  }

  private setTitle() {
    const titlePrefix = this.translate.transform('front_title_my-places', 'My Places');
    this.metaTitleTags.setTitle(titlePrefix);
  }
}

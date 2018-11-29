import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { MapPreviewDto } from '../../core/dto/map-results.dto';
import { AppState } from '../../core/store/app.state';
import { MyAction } from '../../core/store/my/my.action';
import { selectFollowedMaps, selectFollowedMapsLoading } from '../../core/store/my/my.state';
import { TranslatePipe } from '../../pipes/translate/translate.pipe';
import { MetaTitleTags } from '../../services/meta-title-tags/metaTitleTags.service';

@Component({
  selector: 'my-following',
  templateUrl: './my-following.component.html',
  styleUrls: ['./my-following.component.scss']
})
export class MyFollowingComponent implements OnInit {
  followedMaps$: Observable<MapPreviewDto[]>;
  followedMapsLoading$: Observable<boolean>;

  constructor(
    private metaTitleTags: MetaTitleTags,
    private store$: Store<AppState>,
    private translate: TranslatePipe
  ) {}

  ngOnInit() {
    this.followedMapsLoading$ = this.store$.select(selectFollowedMapsLoading);
    this.followedMaps$ = this.store$.select(selectFollowedMaps);
    this.store$.dispatch(new MyAction.GetFollowedMaps({}));

    this.setTitle();
  }

  private setTitle() {
    const titlePrefix = this.translate.transform('front_title_followed-maps', 'Followed Maps');
    this.metaTitleTags.setTitle(titlePrefix);
  }
}

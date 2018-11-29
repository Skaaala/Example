import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { MapPreviewDto } from '../../core/dto/map-results.dto';
import { AppState } from '../../core/store/app.state';
import { MyAction } from '../../core/store/my/my.action';
import { selectMyMaps, selectMyMapsLoading } from '../../core/store/my/my.state';
import { TranslatePipe } from '../../pipes/translate/translate.pipe';
import { MetaTitleTags } from '../../services/meta-title-tags/metaTitleTags.service';

@Component({
  selector: 'my-maps',
  templateUrl: './my-maps.component.html',
  styleUrls: ['./my-maps.component.scss']
})
export class MyMapsComponent implements OnInit {
  myMaps$: Observable<MapPreviewDto[]>;
  myMapsLoading$: Observable<boolean>;

  constructor(
    private metaTitleTags: MetaTitleTags,
    private store$: Store<AppState>,
    private translate: TranslatePipe
  ) {}

  ngOnInit() {
    this.myMapsLoading$ = this.store$.select(selectMyMapsLoading);
    this.myMaps$ = this.store$.select(selectMyMaps);
    this.store$.dispatch(new MyAction.GetMyMaps({}));

    this.setTitle();
  }

  private setTitle() {
    const titlePrefix = this.translate.transform('front_title_my-maps', 'My Maps');
    this.metaTitleTags.setTitle(titlePrefix);
  }
}

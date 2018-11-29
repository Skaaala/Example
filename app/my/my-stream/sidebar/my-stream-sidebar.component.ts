import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { MapPreviewDto } from '../../../core/dto/map-results.dto';
import { AppState } from '../../../core/store/app.state';
import { DashboardAction } from '../../../core/store/dashboard/dashboard.action';
import { selectPopularMaps } from '../../../core/store/dashboard/dashboard.state';

@Component({
  selector: 'my-stream-sidebar',
  templateUrl: './my-stream-sidebar.component.html',
  styleUrls: ['./my-stream-sidebar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MyStreamSidebarComponent implements OnInit {
  public popularMaps$: Observable<MapPreviewDto[]>;

  constructor(private store$: Store<AppState>) {}

  public ngOnInit() {
    this.getPopularMaps();
  }

  public getPopularMaps() {
    this.store$.dispatch(new DashboardAction.GetPopularMaps({ topicId: null, page: 1, pageSize: 4 }));
    this.popularMaps$ = this.store$.select(selectPopularMaps);
  }
}

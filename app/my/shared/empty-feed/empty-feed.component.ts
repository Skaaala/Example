import { Component, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'empty-feed',
  templateUrl: './empty-feed.component.html',
  styleUrls: ['./empty-feed.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EmptyFeedComponent {
  @Input()
  header = '';
  @Input()
  subheader = '';
  @Input()
  middleBtnText = '';
  @Input()
  middleBtnLink = '';
  @Input()
  bottomBtnText = '';
  @Input()
  bottomBtnLink = '';
}

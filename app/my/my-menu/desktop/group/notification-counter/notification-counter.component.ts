import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'notification-counter',
  templateUrl: './notification-counter.component.html',
  styleUrls: ['./notification-counter.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NotificationCounterComponent implements OnInit {
  @Input()
  count;
  @Input()
  limit = 9;

  constructor() {}

  ngOnInit() {}
}

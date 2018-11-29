import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'content-menu',
  templateUrl: './content-menu.component.html',
  styleUrls: ['./content-menu.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContentMenuComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}

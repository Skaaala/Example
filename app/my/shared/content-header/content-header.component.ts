import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'content-header',
  templateUrl: './content-header.component.html',
  styleUrls: ['./content-header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContentHeaderComponent implements OnInit {
  @Input()
  header: string;

  constructor() {}

  ngOnInit() {}
}

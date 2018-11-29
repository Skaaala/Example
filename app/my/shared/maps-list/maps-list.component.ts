import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { MapPreviewDto } from '../../../core/dto/map-results.dto';

@Component({
  selector: 'maps-list',
  templateUrl: './maps-list.component.html',
  styleUrls: ['./maps-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MapsListComponent implements OnInit {
  @Input()
  maps: MapPreviewDto[];
  @Input()
  loading: boolean;

  constructor() {}

  ngOnInit() {}
}

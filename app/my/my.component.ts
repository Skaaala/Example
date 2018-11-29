import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { MediaAlias } from '../core/mobile/media-alias';
import { MobileService } from '../core/mobile/mobile.service';

@Component({
  selector: 'my',
  templateUrl: './my.component.html',
  styleUrls: ['./my.component.scss']
})
export class MyComponent implements OnInit {
  public mobile$: Observable<boolean>;

  constructor(private mobileService: MobileService) {}

  public ngOnInit() {
    this.bindMobile();
  }

  private bindMobile() {
    this.mobile$ = this.mobileService.observeMobile(MediaAlias.XS, MediaAlias.SM);
  }
}

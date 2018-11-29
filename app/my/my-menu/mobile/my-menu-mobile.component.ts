import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { filter, map, startWith } from 'rxjs/operators';

@Component({
  selector: 'my-menu-mobile',
  templateUrl: './my-menu-mobile.component.html',
  styleUrls: ['./my-menu-mobile.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MyMenuMobileComponent implements OnInit {
  public activatedPath$: Observable<string>;

  constructor(private router: Router) {}

  public ngOnInit() {
    this.bindActivatedPath();
  }

  private bindActivatedPath() {
    this.activatedPath$ = this.router.events.pipe(
      filter((event) => event instanceof NavigationEnd),
      map((event) => (event as NavigationEnd).urlAfterRedirects),
      startWith(this.router.url),
      map((url) => url && url.split('/')[2])
    );
  }
}

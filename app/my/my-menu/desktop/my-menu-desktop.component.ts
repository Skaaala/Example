import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { MyMenuDto } from '../../../core/dto/my-menu.dto';
import { AppState } from '../../../core/store/app.state';
import { MyAction } from '../../../core/store/my/my.action';
import { selectMyMenu } from '../../../core/store/my/my.state';
import { TranslatePipe } from '../../../pipes/translate/translate.pipe';

export const ITEMS_LIMIT = 4;

@Component({
  selector: 'my-menu-desktop',
  templateUrl: './my-menu-desktop.component.html',
  styleUrls: ['./my-menu-desktop.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MyMenuDesktopComponent implements OnInit {
  public readonly itemsLimit = ITEMS_LIMIT;

  public myMenu$: Observable<MyMenuDto>;

  constructor(
    private activatedRoute: ActivatedRoute,
    private translate: TranslatePipe,
    private router: Router,
    private store$: Store<AppState>
  ) {}

  public ngOnInit() {
    this.bindMyMenu();
  }

  private bindMyMenu() {
    this.store$.dispatch(new MyAction.GetMenu({}));
    this.myMenu$ = this.store$.select(selectMyMenu);
  }
}

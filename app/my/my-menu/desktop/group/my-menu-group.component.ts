import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { ITEMS_LIMIT } from '../my-menu-desktop.component';

@Component({
  selector: 'my-menu-group',
  templateUrl: './my-menu-group.component.html',
  styleUrls: ['./my-menu-group.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MyMenuGroupComponent {
  public readonly itemsLimit = ITEMS_LIMIT;

  @Input()
  public title: string;

  @Input()
  public icon: string;

  @Input()
  public itemsCount: number;

  @Input()
  public link: any[] | string;

  @Input()
  public notifications: number;
}

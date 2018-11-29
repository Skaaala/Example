import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'my-menu-item',
  templateUrl: './my-menu-item.component.html',
  styleUrls: ['./my-menu-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MyMenuItemComponent {
  @Input()
  public icon: string;

  @Input()
  public link: any[] | string;

  @Input()
  public notifications: number;

  @Input()
  public showMore: boolean;

  @Input()
  public text: string;
}

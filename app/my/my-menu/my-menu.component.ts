import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'my-menu',
  templateUrl: './my-menu.component.html',
  styleUrls: ['./my-menu.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MyMenuComponent {
  @Input()
  public mobile: boolean;
}

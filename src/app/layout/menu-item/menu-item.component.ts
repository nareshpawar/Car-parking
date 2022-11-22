import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Menu } from '../menu.model';

@Component({
  selector: 'app-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MenuItemComponent implements OnInit {
  @Output() myServiceEvent: EventEmitter<any> = new EventEmitter();
  @Input() menu: Menu = [
    {

    }
  ];

  ngOnInit(): void {
  }

  showInfo(menu: any) {
    this.myServiceEvent.emit(menu)
  }
}

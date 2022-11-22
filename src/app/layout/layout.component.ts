import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Menu } from './menu.model';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LayoutComponent {
  opened = true;
  currentMenu:string = "Dashboard"

  toggle(): void {
    this.opened = !this.opened;
  }

  menu: Menu = [
    {
      title: 'Dashboard',
      color: '#ff7f0e',
    },
    {
      title: 'Booking',
      color: '#ff7f0e',
    }
  ];

  getMenuInfo(event:any){
    this.currentMenu = event.title;
  }
}

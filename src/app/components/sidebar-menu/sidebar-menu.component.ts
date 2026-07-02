import { Component } from '@angular/core';
import { IMenuItem } from '../../interfaces/IMenuItem';

@Component({
  selector: 'app-sidebar-menu',
  imports: [],
  templateUrl: './sidebar-menu.component.html',
  styleUrl: './sidebar-menu.component.css',
})
export class SidebarMenuComponent {
  menuItems: IMenuItem[] = [
    {
      title: 'Dashboard',
      icon: 'dashboard',
      route: '/dashboard',
    },
    {
      title: 'Users',
      icon: 'people',
      route: '/users',
    },
    {
      title: 'Settings',
      icon: 'settings',
      route: '/settings',
    },
  ];
}

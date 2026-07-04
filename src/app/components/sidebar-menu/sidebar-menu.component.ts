import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { IMenuItem } from '../../interfaces/IMenuItem';
import { SvgIconComponent } from '../svg-icon-component/svg-icon-component';

@Component({
  selector: 'app-sidebar-menu',
  imports: [NgFor, SvgIconComponent],
  templateUrl: './sidebar-menu.component.html',
})
export class SidebarMenuComponent {
  menuItems: IMenuItem[] = [
    {
      title: 'Dashboard',
      icon: 'home',
      route: '/dashboard',
    },
    {
      title: 'Users',
      icon: 'chat',
      route: '/users',
    },
    {
      title: 'Settings',
      icon: 'search',
      route: '/settings',
    },
  ];
}

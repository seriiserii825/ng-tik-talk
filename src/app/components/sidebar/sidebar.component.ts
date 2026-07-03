import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SidebarMenuComponent } from '../sidebar-menu/sidebar-menu.component';
import { SubscriberCardComponent } from '../subscriber-card-component/subscriber-card-component';
import { SvgIconComponent } from '../svg-icon-component/svg-icon-component';

@Component({
  selector: 'app-sidebar',
  imports: [SidebarMenuComponent, SubscriberCardComponent, RouterLink, SvgIconComponent],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css',
})
export class SidebarComponent {}

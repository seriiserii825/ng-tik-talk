import { Component } from '@angular/core';
import { SidebarMenuComponent } from '../sidebar-menu/sidebar-menu.component';
import { SubscriberCardComponent } from '../subscriber-card-component/subscriber-card-component';

@Component({
  selector: 'app-sidebar',
  imports: [SidebarMenuComponent, SubscriberCardComponent],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css',
})
export class SidebarComponent {}

import { AsyncPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ProfileService } from '../../services/profile.service';
import { SidebarMenuComponent } from '../sidebar-menu/sidebar-menu.component';
import { SubscriberCardComponent } from '../subscriber-card-component/subscriber-card-component';
import { SvgIconComponent } from '../svg-icon-component/svg-icon-component';

@Component({
  selector: 'app-sidebar',
  imports: [SidebarMenuComponent, SubscriberCardComponent, RouterLink, SvgIconComponent, AsyncPipe],
  templateUrl: './sidebar.component.html',
})
export class SidebarComponent {
  profileService = inject(ProfileService);
  subscribers$ = this.profileService.getSubscribersShortList();
}

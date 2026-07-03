import { AsyncPipe } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ProfileService } from '../../services/profile.service';
import { SidebarMenuComponent } from '../sidebar-menu/sidebar-menu.component';
import { SubscriberCardComponent } from '../subscriber-card-component/subscriber-card-component';
import { SvgIconComponent } from '../svg-icon-component/svg-icon-component';
import { ImgUrlPipe } from '../../helpers/pipes/img-url-pipe';

@Component({
  selector: 'app-sidebar',
  imports: [
    SidebarMenuComponent,
    SubscriberCardComponent,
    RouterLink,
    SvgIconComponent,
    AsyncPipe,
    ImgUrlPipe,
  ],
  templateUrl: './sidebar.component.html',
})
export class SidebarComponent implements OnInit {
  profileService = inject(ProfileService);
  me = this.profileService.me;
  subscribers$ = this.profileService.getSubscribersShortList();

  ngOnInit() {
    this.profileService.onInit();
  }
}

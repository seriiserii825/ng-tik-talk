import { Component, inject, OnInit } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { RouterLink } from '@angular/router';
import { ImgUrlPipe } from '../../helpers/pipes/img-url-pipe';
import { ProfileService } from '../../services/profile.service';
import { SidebarMenuComponent } from '../sidebar-menu/sidebar-menu.component';
import { SubscriberCardComponent } from '../subscriber-card-component/subscriber-card-component';
import { SvgIconComponent } from '../svg-icon-component/svg-icon-component';
import { LoadingIcon } from '../../icons/loading-icon/loading-icon';

@Component({
  selector: 'app-sidebar',
  imports: [
    SidebarMenuComponent,
    SubscriberCardComponent,
    RouterLink,
    SvgIconComponent,
    ImgUrlPipe,
    LoadingIcon,
  ],
  templateUrl: './sidebar.component.html',
})
export class SidebarComponent implements OnInit {
  profileService = inject(ProfileService);
  me = this.profileService.me;
  subscribers = toSignal(this.profileService.getSubscribersShortList());

  ngOnInit() {
    this.profileService.onInit();
  }
}

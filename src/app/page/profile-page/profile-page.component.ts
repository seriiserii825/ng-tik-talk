import { Component, inject, OnInit } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { RouterLink } from '@angular/router';
import { ProfileFollowers } from '../../components/profile-followers/profile-followers';
import { ProfileHeaderComponent } from '../../components/profile-header-component/profile-header-component';
import { SvgIconComponent } from '../../components/svg-icon-component/svg-icon-component';
import { ProfileService } from '../../services/profile.service';
import { LoadingIcon } from '../../icons/loading-icon/loading-icon';
import { AboutMe } from '../../components/about-me/about-me';

@Component({
  selector: 'app-profile-page',
  imports: [
    ProfileHeaderComponent,
    RouterLink,
    SvgIconComponent,
    ProfileFollowers,
    LoadingIcon,
    AboutMe,
  ],
  templateUrl: './profile-page.component.html',
})
export class ProfilePageComponent implements OnInit {
  profileService = inject(ProfileService);
  subscribers = toSignal(this.profileService.getSubscribersShortList());

  ngOnInit() {
    this.profileService.onInit();
  }
}

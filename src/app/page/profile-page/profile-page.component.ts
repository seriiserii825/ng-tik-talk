import { Component, inject, OnInit } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { ProfileFollowers } from '../../components/profile-followers/profile-followers';
import { ProfileHeaderComponent } from '../../components/profile-header-component/profile-header-component';
import { SvgIconComponent } from '../../components/svg-icon-component/svg-icon-component';
import { ProfileService } from '../../services/profile.service';
import { LoadingIcon } from '../../icons/loading-icon/loading-icon';
import { AboutMe } from '../../components/about-me/about-me';
import { switchMap } from 'rxjs';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-profile-page',
  imports: [
    ProfileHeaderComponent,
    RouterLink,
    SvgIconComponent,
    ProfileFollowers,
    LoadingIcon,
    AboutMe,
    AsyncPipe,
  ],
  templateUrl: './profile-page.component.html',
})
export class ProfilePageComponent implements OnInit {
  profileService = inject(ProfileService);
  subscribers = toSignal(this.profileService.getSubscribersShortList());
  activeRoute = inject(ActivatedRoute);
  profile$ = this.activeRoute.params.pipe(
    switchMap((params) => this.profileService.getProfileById(params['id'])),
  );

  ngOnInit() {
    this.profileService.onInit();
  }
}

import { Component, input } from '@angular/core';
import { IProfile } from '../../interfaces/IProfile';
import { ImgUrlPipe } from '../../helpers/pipes/img-url-pipe';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-profile-followers',
  imports: [ImgUrlPipe, RouterLink],
  templateUrl: './profile-followers.html',
})
export class ProfileFollowers {
  subscribers = input<IProfile[]>([]);
}

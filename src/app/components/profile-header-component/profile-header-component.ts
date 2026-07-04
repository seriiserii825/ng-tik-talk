import { Component, input } from '@angular/core';
import { IProfile } from '../../interfaces/IProfile';
import { ImgUrlPipe } from '../../helpers/pipes/img-url-pipe';

@Component({
  selector: 'app-profile-header-component',
  imports: [ImgUrlPipe],
  templateUrl: './profile-header-component.html',
})
export class ProfileHeaderComponent {
  profile = input.required<IProfile>();
}

import { Component, Input } from '@angular/core';
import { IProfile } from '../../interfaces/IProfile';

@Component({
  selector: 'app-profile-card',
  imports: [],
  templateUrl: './profile-card.html',
  styleUrl: './profile-card.css',
})
export class ProfileCard {
  @Input() profile!: IProfile;
}

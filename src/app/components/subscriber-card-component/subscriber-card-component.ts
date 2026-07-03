import { Component, input } from '@angular/core';
import { IProfile } from '../../interfaces/IProfile';
import { ImgUrlPipe } from '../../helpers/pipes/img-url-pipe';

@Component({
  selector: 'app-subscriber-card-component',
  imports: [ImgUrlPipe],
  templateUrl: './subscriber-card-component.html',
})
export class SubscriberCardComponent {
  profile = input.required<IProfile>();
}

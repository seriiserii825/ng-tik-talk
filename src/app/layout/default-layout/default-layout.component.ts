import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SidebarComponent } from '../../components/sidebar/sidebar.component';
import { ProfileService } from '../../services/profile.service';

@Component({
  selector: 'app-default-layout',
  imports: [RouterOutlet, SidebarComponent],
  templateUrl: './default-layout.component.html',
})
export class DefaultLayoutComponent {
  profileService = inject(ProfileService);
}

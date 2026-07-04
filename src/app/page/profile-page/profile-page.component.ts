import { Component } from '@angular/core';
import { ProfileHeaderComponent } from '../../components/profile-header-component/profile-header-component';
import { RouterLink } from '@angular/router';
import { SvgIconComponent } from '../../components/svg-icon-component/svg-icon-component';

@Component({
  selector: 'app-profile-page',
  imports: [ProfileHeaderComponent, RouterLink, SvgIconComponent],
  templateUrl: './profile-page.component.html',
})
export class ProfilePageComponent {}

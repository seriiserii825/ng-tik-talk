import { Component, inject, signal } from '@angular/core';
import { IProfile } from '../../interfaces/IProfile';
import { ProfileService } from '../../services/profile.service';
import { ProfileCard } from '../../shared/profile-card/profile-card';

@Component({
  selector: 'app-search-page',
  imports: [ProfileCard],
  templateUrl: './search-page.component.html',
})
export class SearchPageComponent {
  protected readonly title = signal('ng-wishlist');
  profileService = inject(ProfileService);
  profiles = signal<IProfile[]>([]);

  constructor() {
    this.profileService.getTestAccounts().subscribe({
      next: (data) => {
        if (!data || !Array.isArray(data)) {
          console.error('Invalid data received:', data);
          return;
        }
        this.profiles.set(data);
      },
      error: (err) => {
        console.error(err);
      },
    });
  }
}

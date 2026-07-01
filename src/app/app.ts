import { Component, inject, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProfileCard } from './shared/profile-card/profile-card';
import { ProfileService } from './services/profile.service';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ProfileCard, JsonPipe],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('ng-wishlist');
  profileService = inject(ProfileService);
  profiles: any = [];

  constructor() {
    this.profileService.getTestAccounts().subscribe({
      next: (data) => {
        console.log(data);
        this.profiles = data;
      },
      error: (err) => {
        console.error(err);
      },
    });
  }
}

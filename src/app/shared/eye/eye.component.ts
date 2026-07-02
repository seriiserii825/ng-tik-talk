import { Component, input } from '@angular/core';

@Component({
  selector: 'app-eye',
  imports: [],
  templateUrl: './eye.component.html',
  styleUrl: './eye.component.css',
})
export class EyeComponent {
  active = input<boolean>(false);
}

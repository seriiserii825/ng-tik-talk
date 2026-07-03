import { Component, input } from '@angular/core';

@Component({
  selector: 'app-svg[icon]',
  imports: [],
  template: '<svg width="100%" height="100%"><use [attr.href]="href" /></svg>',
})
export class SvgIconComponent {
  icon = input('');

  get href() {
    return `svg/${this.icon()}.svg#${this.icon()}`;
  }
}

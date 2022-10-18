import { Component, OnInit } from '@angular/core';

@Component({
  standalone: true,
  selector: 'flight-workspace-title',
  template: `
    <h4>{{ title }}</h4>
  `
})
export class TitleComponent {
  title = 'My dynamic component title! :)';
}

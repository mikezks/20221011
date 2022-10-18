import {Component, ViewEncapsulation} from '@angular/core';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class HomeComponent {
  value1 = true;

  changed(event: any): void {
    console.log('event', event);
    this.value1 = event.detail;
  }
}

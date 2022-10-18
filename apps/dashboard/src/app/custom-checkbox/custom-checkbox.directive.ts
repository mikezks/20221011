// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Directive, HostListener, Output, EventEmitter } from '@angular/core';

@Directive({
  // eslint-disable-next-line @angular-eslint/directive-selector
  selector: 'custom-checkbox'
})
export class CustomCheckboxDirective {

  @Output() checkedChange = new EventEmitter<boolean>();

  @HostListener('changed', ['$event'])
  changed($event: CustomEvent): void {
      this.checkedChange.emit($event.detail);
  }
}

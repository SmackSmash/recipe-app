import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {
  constructor(private elementRef: ElementRef) {}

  @HostListener('click') click(eventData: Event) {
    this.elementRef.nativeElement.parentNode.lastChild.classList.toggle('show');
  }
}

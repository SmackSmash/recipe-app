import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {
  constructor(private elementRef: ElementRef) {}

  @HostListener('click') toggleOpen(eventData: Event) {
    this.elementRef.nativeElement.parentNode.classList.toggle('open');
  }
}

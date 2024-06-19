import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[kunCodeResize]',
  standalone: true,
})
export class ResizeDirective {
  constructor(private el: ElementRef) {}
}

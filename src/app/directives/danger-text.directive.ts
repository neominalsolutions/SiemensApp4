import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[dangerText]',
})
export class DangerTextDirective {
  constructor(private el: ElementRef) {
    (this.el.nativeElement as HTMLElement).style.color = 'red';
  }

  @HostListener('mouseover')
  OnMouseOver() {
    (this.el.nativeElement as HTMLElement).style.textDecoration = 'underline';
    (this.el.nativeElement as HTMLElement).style.cursor = 'pointer';
  }

  @HostListener('mouseout')
  OnMouseOut() {
    (this.el.nativeElement as HTMLElement).style.textDecoration = 'none';
  }
}

import { Directive, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[hasPermission]',
})
export class PermissionDirective implements OnInit {
  constructor(private el: ElementRef, private renderer2: Renderer2) {}

  @Input('hasPermission') permissionName!: string;

  ngOnInit(): void {
    const element = this.el.nativeElement as HTMLElement;

    console.log('permissionName', this.permissionName);

    const userInfo = localStorage.getItem('userInfo');

    if (userInfo != undefined) {
      const userObj: any = JSON.parse(userInfo);
      if (userObj.permission.includes(this.permissionName) == false) {
        this.renderer2.removeChild(element.parentElement, element);
        // elementi domdan kaldırdık
      }
    }

    // this.renderer2.addClass(this.el.nativeElement,"active");
  }
}

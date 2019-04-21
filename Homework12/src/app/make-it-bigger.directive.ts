import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appMakeItBigger]'
})
export class MakeItBiggerDirective {

  constructor(private el: ElementRef ) {

  }
  @HostListener('dblclick') ondblclick(){
    const size = parseInt (this.el.nativeElement.style.fontSize.split('px')[0]);
    this.el.nativeElement.style.fontSize= size + 2 + 'px';
  }

}

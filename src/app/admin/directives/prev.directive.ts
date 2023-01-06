import { Directive, HostListener, ElementRef } from '@angular/core';

@Directive({
  selector: '[appPrev]',
})
export class PrevDirective {
  constructor(private el: ElementRef) {}
  @HostListener('click')
  prev() {
    // console.log(this.el.nativeElement);
    var elm = this.el.nativeElement.parentElement.parentElement.children[0];
    var item = elm.getElementsByClassName('item');
    elm.prepend(item[item.length - 1]);
  }
}

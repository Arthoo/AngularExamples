import { Directive, Input, ElementRef } from '@angular/core';

@Directive({
  selector: '[appTest=myTest]'
})
export class TestDirective {
  @Input() myTest: string;
  constructor(el: ElementRef) {
    el.nativeElement.style.backgroundColor = this.myTest;
 }
}

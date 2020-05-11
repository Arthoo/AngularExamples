import { Directive, Input } from '@angular/core';

@Directive({
  selector: '[appTest]'
})
export class TestDirective {
  @Input() myTest: string;
  constructor() { }

}

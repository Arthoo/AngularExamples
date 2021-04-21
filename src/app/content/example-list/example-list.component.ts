import { Component } from '@angular/core';
import { CODE_TEXT } from './example-list.const';

@Component({
  selector: 'app-example-list',
  templateUrl: './example-list.component.html',
  styleUrls: ['./example-list.component.css'],
})
export class ExampleListComponent {
  code = CODE_TEXT;
}

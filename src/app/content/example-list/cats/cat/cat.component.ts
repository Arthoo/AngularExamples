import { Component, Input } from '@angular/core';
import { Cat } from '../cats.component';

@Component({
  selector: 'app-cat',
  templateUrl: './cat.component.html',
  styleUrls: ['./cat.component.css'],
})
export class CatComponent {
  @Input() cat: Cat;
}

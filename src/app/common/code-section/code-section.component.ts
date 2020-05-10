import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-code-section',
  templateUrl: './code-section.component.html',
  styleUrls: ['./code-section.component.css'],
})
export class CodeSectionComponent {
  @Input() code: string;
  @Input() filename: string;
}

import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-expandable-icon',
  template: `
    <ng-template #noLink>
      <img [src]="icon" />
      <span appTest="'blue'">{{ text }}</span>
    </ng-template>
    <ng-container *ngIf="link; else noLink">
      <a [href]="link">
        <img [src]="icon" />
        <span>{{ text }}</span>
      </a>
    </ng-container>
  `,
  styleUrls: ['./expandable-icon.component.css'],
})
export class ExpandableIconComponent {
  @Input() icon: string;
  @Input() text: string;
  @Input() link?: string;
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-example-list',
  templateUrl: './example-list.component.html',
  styleUrls: ['./example-list.component.css'],
})
export class ExampleListComponent {
  code = {
    listTs: `export class ListComponent implements OnInit {

  // List item data
  @Input() items: any[];

  // Reference to the template with component to instantiate
  @ContentChild('itemTemplate') itemTemplate: TemplateRef<any>;

  ...
`,
    listHtml: `...
<ng-container *ngFor="let item of items">

  <!-- The provided template will be instantiated here for each item -->
  <ng-container *ngTemplateOutlet="itemTemplate; context: { item: item }">
  </ng-container>

</ng-container>
...`,
    cats: `<app-list [items]="cats">

  <!-- This template contains the component that will be instantiated for each list item -->
  <ng-template #itemTemplate let-cat="item">
    <app-cat [cat]="cat"></app-cat>
  </ng-template>

</app-list>`,
  };
}

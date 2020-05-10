import { Component } from '@angular/core';

@Component({
  selector: 'app-example-list',
  templateUrl: './example-list.component.html',
  styleUrls: ['./example-list.component.css'],
})
export class GenericListComponent {
  code = {
    listTs: `export class ListComponent implements OnInit {
  @Input() items: any[];

  // This is the reference to the template that is a child of the list
  @ContentChild('itemTemplate') itemTemplate: TemplateRef<any>;

  ...
`,
    listHtml: `<ng-container *ngFor="let item of itemsDisplayed">

<!-- The provided template will be instantiated here for each item -->
<ng-container *ngTemplateOutlet="itemTemplate; context: { item: item }">
</ng-container>

</ng-container>`,
    cats: `<app-list [title]="'Cats'" [items]="cats" [doesMatchSearch]="doesMatchSearch">

<!-- This template contains the component that will be instantiated for each list item -->
<ng-template #itemTemplate let-cat="item">
  <app-cat [cat]="cat"></app-cat>
</ng-template>

</app-list>`,
  };
}

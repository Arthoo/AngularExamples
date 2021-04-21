export const CODE_TEXT = {
  nonWorkingListParent: `<non-working-list [data]="['This', 'does', 'not', 'work']">

  <!-- This is our projected component -->
  <some-component></some-component>

</non-working-list>`,
  nonWorkingList: `<ng-container *ngFor="let item of items">

  <!-- This does not work :( -->
  <ng-content></ng-content>

</ng-container>`,
  listTs: `export class ListComponent implements OnInit {

  // Item data list
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

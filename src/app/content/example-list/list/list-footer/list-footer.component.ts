import { Component, Input, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { BehaviorSubject, Observable } from 'rxjs';

@Component({
  selector: 'app-list-footer',
  templateUrl: './list-footer.component.html',
  styleUrls: ['./list-footer.component.css'],
})
export class ListFooterComponent  {
  @Input() pagination$: BehaviorSubject<PageEvent>;
  pageSizeOptions = [5, 10, 25];

  onUpdate(pageEvent: PageEvent) {
    this.pagination$.next(pageEvent);
  }
}

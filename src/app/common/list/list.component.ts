import {
  Component,
  ContentChild,
  Input,
  OnInit,
  TemplateRef,
  ChangeDetectionStrategy,
} from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { BehaviorSubject, combineLatest, Observable, of } from 'rxjs';
import { map, tap } from 'rxjs/operators';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListComponent implements OnInit {
  @Input() title: string;
  @Input() items: any[];
  @Input() doesMatchSearch: (item: any, search: string) => boolean;
  @ContentChild('itemTemplate') itemTemplate: TemplateRef<any>;

  search$: BehaviorSubject<string>;
  pagination$: BehaviorSubject<PageEvent>;
  itemsFiltered$: Observable<any[]>;
  itemsDisplayed$: Observable<any[]>;

  ngOnInit() {
    this.search$ = new BehaviorSubject<string>('');
    this.itemsFiltered$ = combineLatest([of(this.items), this.search$]).pipe(
      map(([items, search]) => this.search(items, search))
    );
    this.pagination$ = new BehaviorSubject<PageEvent>(
      this.getPagination(this.items)
    );
    this.itemsFiltered$.subscribe((items) => {
      this.pagination$.next(this.getPagination(items));
    });
    this.itemsDisplayed$ = combineLatest([
      this.itemsFiltered$,
      this.pagination$,
    ]).pipe(map(([items, pagination]) => this.paginate(items, pagination)));
  }

  private search(items: any[] = [], search: string = ''): any[] {
    search = search.toLowerCase();
    return items.filter((item) => this.doesMatchSearch(item, search));
  }

  private getPagination(items: any[], prevPagination?: PageEvent): PageEvent {
    return {
      pageIndex: 0,
      pageSize: prevPagination?.pageSize ?? 10,
      length: items?.length,
    };
  }

  private paginate(items: any[], pagination: PageEvent): any[] {
    const start = pagination.pageIndex * pagination.pageSize;
    return items.slice(start, start + pagination.pageSize);
  }
}

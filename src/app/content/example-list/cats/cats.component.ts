import { Component } from '@angular/core';
import { CATS } from './cats.data';

export type Cat = {
  name: string;
  description: string;
  url: string;
};

@Component({
  selector: 'app-cats',
  templateUrl: './cats.component.html'
})
export class CatsComponent {
  cats = CATS;

  doesMatchSearch(item: Cat, search: string = ''): boolean {
    return (
      !search.length || item.description?.toLowerCase().indexOf(search) > -1
    );
  }
}

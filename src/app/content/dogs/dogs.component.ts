import { Component, OnInit } from '@angular/core';
import { DOGS } from './dogs.data';

export type Dog = {
  name: string;
  description: string;
  url: string;
  coolness?: number;
};

@Component({
  selector: 'app-dogs',
  templateUrl: './dogs.component.html',
  styleUrls: ['./dogs.component.css'],
})
export class DogsComponent {
  dogs = DOGS;

  doesMatchSearch(item: Dog, search: string = ''): boolean {
    return (
      !search.length || item.description?.toLowerCase().indexOf(search) > -1
    );
  }
}

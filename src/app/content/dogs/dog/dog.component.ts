import { Component, Input, OnInit } from '@angular/core';
import { Dog } from '../dogs.component';

@Component({
  selector: 'app-dog',
  templateUrl: './dog.component.html',
  styleUrls: ['./dog.component.css']
})
export class DogComponent implements OnInit {
  @Input() dog: Dog;

  constructor() { }

  ngOnInit(): void {
  }

}

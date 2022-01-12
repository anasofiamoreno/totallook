import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  heroes: string[] = [
    "Iron Man",
    "Spiderman",
    "Thor",
    "Hulk",
    "Black Widow",
    "Hawk Eye"
];

  constructor() { }

  ngOnInit(): void {
  }

}

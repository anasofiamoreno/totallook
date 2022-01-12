import { Component, OnInit } from '@angular/core';
import { Categorie } from 'src/app/interfaces/interfaces';
import { versionMajorMinor } from 'typescript';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {



  heroes: Categorie[] = [
    {name: 'Conjuntos', imglink: "https://firebasestorage.googleapis.com/v0/b/totallook-9d00d.appspot.com/o/conjunto.jpg?alt=media&token=7ab26895-0993-4384-9626-9b3e2667af54"},
    {name: 'Pantalones', imglink: "https://firebasestorage.googleapis.com/v0/b/totallook-9d00d.appspot.com/o/pantalones.jpg?alt=media&token=91443f64-8c63-4cbb-8814-25612a4735fa"},
    {name: 'Vestidos', imglink: "https://firebasestorage.googleapis.com/v0/b/totallook-9d00d.appspot.com/o/vestido.jpg?alt=media&token=ba67c7ff-3749-473f-83d1-a0f3af581a5d"},
    {name: 'Zapatos', imglink: "https://firebasestorage.googleapis.com/v0/b/totallook-9d00d.appspot.com/o/zapatos.jpg?alt=media&token=d3837f54-9d21-4814-8ff8-c1745ca69c5b"},
];

  constructor() { }

  ngOnInit(): void {
  }

}

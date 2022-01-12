import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-templatecategori',
  templateUrl: './templatecategori.component.html',
  styleUrls: ['./templatecategori.component.css']
})
export class TemplatecategoriComponent implements OnInit {

  @Input() imglink: string = ''
  @Input() catlink: string = ''
  @Input() editlink: string =''
  @Input() catname: string = ''
  User: boolean= true

  constructor() { }

  ngOnInit(): void {
  }

  

}

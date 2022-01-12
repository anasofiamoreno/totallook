import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main/main.component';
import { CategoriesComponent } from './categories/categories.component';
import { TemplatecategoriComponent } from './templatecategori/templatecategori.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    MainComponent,
    CategoriesComponent,
    TemplatecategoriComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    MainComponent,
    CategoriesComponent
  ]
})
export class PagesModule { }

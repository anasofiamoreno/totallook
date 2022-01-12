import { NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
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
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA ]
})
export class PagesModule { }

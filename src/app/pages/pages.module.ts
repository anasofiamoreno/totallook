import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main/main.component';
import { CategoriesComponent } from './categories/categories.component';
import { TemplatecategoriComponent } from './templatecategori/templatecategori.component';
import { FormsModule } from '@angular/forms';
import { AuthModule } from '../auth/auth.module';
import { EditcategoryComponent } from './editcategory/editcategory.component';



@NgModule({
  declarations: [
    MainComponent,
    CategoriesComponent,
    TemplatecategoriComponent,
    EditcategoryComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    AuthModule
  ],
  exports: [
    MainComponent,
    CategoriesComponent
  ]
})
export class PagesModule { }

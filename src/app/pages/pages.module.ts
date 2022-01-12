import { NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main/main.component';
import { CategoriesComponent } from './categories/categories.component';
import { TemplatecategoriComponent } from './templatecategori/templatecategori.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthModule } from '../auth/auth.module';
import { EditcategoryComponent } from './editcategory/editcategory.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PromotionComponent } from './promotion/promotion.component';
import { ShortcatComponent } from './shortcat/shortcat.component';

@NgModule({
  declarations: [
    MainComponent,
    CategoriesComponent,
    TemplatecategoriComponent,
    EditcategoryComponent,
    PromotionComponent,
    ShortcatComponent

  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AuthModule,
    NgbModule
  ],
  exports: [
    MainComponent,
    CategoriesComponent,
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA ],
  
})
export class PagesModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoriesComponent } from './pages/categories/categories.component';
import { EditcategoryComponent } from './pages/editcategory/editcategory.component';
import { MainComponent } from './pages/main/main.component';

const routes: Routes = [
  {path:'', component:MainComponent},
  {path:'categories', component:CategoriesComponent},
  {path:'editcategory', component:EditcategoryComponent},
  {path:'**', component:MainComponent},
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

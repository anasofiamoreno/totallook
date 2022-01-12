import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoriesComponent } from './pages/categories/categories.component';
import { MainComponent } from './pages/main/main.component';

const routes: Routes = [
  {path:'', component:MainComponent},
  {path:'categories', component:CategoriesComponent},
  {path:'**', component:MainComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

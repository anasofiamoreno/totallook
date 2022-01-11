import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { ModalLoginComponent } from './modal-login/modal-login.component';



@NgModule({
  declarations: [
    HeaderComponent,
    ModalLoginComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    HeaderComponent
  ]
})
export class AuthModule { }

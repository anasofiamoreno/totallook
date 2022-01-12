import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PromotionComponent } from './pages/promotion/promotion.component';

import { PagesModule } from './pages/pages.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AuthModule } from './auth/auth.module';


@NgModule({
  declarations: [
    AppComponent,
    PromotionComponent
  ],
  imports: [
    AuthModule,
    BrowserModule,
    AppRoutingModule,
    PagesModule,
    NgbModule,
  ],
  providers: [],
  bootstrap: [AppComponent, PromotionComponent],
})
export class AppModule { }

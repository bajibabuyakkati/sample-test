import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import {HomeComponent} from "./home/home.component";
import { FirstModule } from "./first-module/first-module.module";
import { SecondModule } from "./second-module/second-module.module";
import { AppRoutingModule } from "./app-routing.module";
import { AuthGuard } from "./auth-guard.service";
import { AuthService } from "./auth.service";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FirstModule,
    SecondModule,
    AppRoutingModule
  ],
  providers: [AuthService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }

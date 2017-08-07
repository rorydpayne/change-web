import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import 'hammerjs';

import { AppComponent } from './main/ts/app.component';
import { LoginComponent } from './main/ts/login.component';
import { HomeComponent } from './main/ts/home.component';
import { AppRoutingModule } from './app-routing.module';
import {TokenService} from "./main/ts/service/token.service";
import {CookieService} from "angular2-cookie/services/cookies.service";
import {SignupComponent} from "./main/ts/signup.component";
import {AuthService} from "./main/ts/service/auth.service";
import {ChangeRestService} from "./main/ts/service/change-rest.service";

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    SignupComponent
  ],
  imports: [
    MaterialModule,
    FlexLayoutModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [TokenService, CookieService, AuthService, ChangeRestService],
  bootstrap: [AppComponent]
})
export class AppModule { }

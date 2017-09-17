"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var platform_browser_1 = require('@angular/platform-browser');
var core_1 = require('@angular/core');
var forms_1 = require('@angular/forms');
var http_1 = require('@angular/http');
var material_1 = require('@angular/material');
var flex_layout_1 = require('@angular/flex-layout');
require('hammerjs');
var app_component_1 = require('./main/ts/app.component');
var login_component_1 = require('./main/ts/login.component');
var home_component_1 = require('./main/ts/home.component');
var app_routing_module_1 = require('./app-routing.module');
var token_service_1 = require("./main/ts/service/token.service");
var cookies_service_1 = require("angular2-cookie/services/cookies.service");
var signup_component_1 = require("./main/ts/signup.component");
var auth_service_1 = require("./main/ts/service/auth.service");
var account_settings_component_1 = require("./main/ts/account-settings.component");
var authenticated_http_service_1 = require("./main/ts/service/authenticated-http.service");
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                login_component_1.LoginComponent,
                home_component_1.HomeComponent,
                signup_component_1.SignupComponent,
                account_settings_component_1.AccountSettingsComponent
            ],
            imports: [
                material_1.MaterialModule,
                flex_layout_1.FlexLayoutModule,
                platform_browser_1.BrowserModule,
                forms_1.FormsModule,
                http_1.HttpModule,
                app_routing_module_1.AppRoutingModule
            ],
            providers: [token_service_1.TokenService, cookies_service_1.CookieService, auth_service_1.AuthService, authenticated_http_service_1.AuthenticatedHttpService],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;

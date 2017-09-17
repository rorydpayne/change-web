"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
require('rxjs/add/operator/toPromise');
var account_settings_1 = require("../model/account-settings");
var monetary_amount_1 = require("../model/monetary-amount");
var UserService = (function () {
    function UserService(http) {
        this.http = http;
    }
    UserService.prototype.getUser = function () {
        return this.http.get('/me', {})
            .map(function (res) { return res ? res.json().data : null; });
    };
    UserService.prototype.getAccountSettings = function () {
        return this.http.get('/account-settings', {})
            .map(function (res) {
            var json = res.json();
            return new account_settings_1.AccountSettings(json.id, json.currencyCode, new monetary_amount_1.MonetaryAmount(json.weeklyDeposit.currencyCode, json.weeklyDeposit.amount), json.roundupsEnabled, json.account);
        });
    };
    UserService = __decorate([
        core_1.Injectable()
    ], UserService);
    return UserService;
}());
exports.UserService = UserService;

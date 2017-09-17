"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var TokenService = (function () {
    function TokenService(cookieService) {
        this.cookieService = cookieService;
        this.accessTokenKey = 'CHANGE_TOKEN';
        this.refreshTokenKey = 'CHANGE_REFRESH';
    }
    TokenService.prototype.storeAccessToken = function (value, expiry) {
        this.cookieService.put(this.accessTokenKey, value, { expires: expiry });
    };
    TokenService.prototype.storeRefreshToken = function (value) {
        this.cookieService.put(this.refreshTokenKey, value);
    };
    TokenService.prototype.retrieveAccessToken = function () {
        return this.cookieService.get(this.accessTokenKey);
    };
    TokenService.prototype.retrieveRefreshToken = function () {
        return this.cookieService.get(this.refreshTokenKey);
    };
    TokenService = __decorate([
        core_1.Injectable()
    ], TokenService);
    return TokenService;
}());
exports.TokenService = TokenService;

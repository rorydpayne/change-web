"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var login_1 = require("../model/login");
var environment_1 = require("../../../../environments/environment");
var http_1 = require("@angular/http");
var auth_response_1 = require("../model/auth-response");
var AuthService = (function () {
    function AuthService(http, tokenService, router) {
        this.http = http;
        this.tokenService = tokenService;
        this.router = router;
        this.headers = new http_1.Headers({
            'Authorization': 'Basic ' + btoa(environment_1.environment.auth.clientId + ':' + environment_1.environment.auth.clientSecret),
            'Content-type': 'application/x-www-form-urlencoded; charset=utf-8'
        });
    }
    AuthService.prototype.login = function (login) {
        var _this = this;
        var urlSearchParams = new http_1.URLSearchParams();
        urlSearchParams.append('username', login.email);
        urlSearchParams.append('password', login.password);
        urlSearchParams.append('grant_type', 'password');
        return this.http.post(environment_1.environment.auth.loginUrl, urlSearchParams.toString(), { headers: this.headers })
            .toPromise()
            .then(function (res) {
            var authResponse = new auth_response_1.AuthResponse().deserialize(res.json());
            var expireDate = new Date(new Date().getTime() + (1000 * authResponse.getExpiresIn()));
            _this.tokenService.storeAccessToken(authResponse.getAccessToken(), expireDate);
            _this.tokenService.storeRefreshToken(authResponse.getRefreshToken());
        });
    };
    AuthService.prototype.signup = function (userSignUp) {
        var _this = this;
        var heads = new http_1.Headers({
            'Content-type': 'application/json'
        });
        return this.http.post(environment_1.environment.auth.registrationUrl, JSON.stringify(userSignUp), { headers: heads })
            .toPromise()
            .then(function (res) {
            var login = new login_1.Login();
            login.email = userSignUp.getEmail();
            login.password = userSignUp.getPassword();
            _this.login(login);
        });
    };
    AuthService.prototype.authenticate = function () {
        var _this = this;
        var refreshToken = this.tokenService.retrieveRefreshToken();
        if (refreshToken == null) {
            this.router.navigateByUrl('/login');
            return Promise.reject(null);
        }
        var urlSearchParams = new http_1.URLSearchParams();
        urlSearchParams.append('grant_type', 'refresh_token');
        urlSearchParams.append('client_id', environment_1.environment.auth.clientId);
        urlSearchParams.append('refresh_token', refreshToken);
        return this.http.post(environment_1.environment.auth.loginUrl, urlSearchParams.toString(), { headers: this.headers })
            .toPromise()
            .then(function (res) {
            var authResponse = new auth_response_1.AuthResponse().deserialize(res.json());
            var expireDate = new Date(new Date().getTime() + (1000 * authResponse.getExpiresIn()));
            _this.tokenService.storeAccessToken(authResponse.getAccessToken(), expireDate);
            _this.tokenService.storeRefreshToken(authResponse.getRefreshToken());
        }, function (err) {
            _this.router.navigateByUrl('/login');
            return Promise.reject(err);
        });
    };
    AuthService.prototype.getAccessToken = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var token = _this.tokenService.retrieveAccessToken();
            if (token) {
                return resolve(token);
            }
            else {
                _this.authenticate().then(_this.getAccessToken, reject);
            }
        });
    };
    AuthService.prototype.getClientAccessToken = function () {
        var _this = this;
        var urlSearchParams = new http_1.URLSearchParams();
        urlSearchParams.append('grant_type', 'client_credentials');
        return new Promise(function (resolve, reject) {
            _this.http.post(environment_1.environment.auth.loginUrl, urlSearchParams.toString(), { headers: _this.headers })
                .toPromise()
                .then(function (res) {
                resolve(new auth_response_1.AuthResponse().deserialize(res.json()));
            }, reject);
        });
    };
    AuthService = __decorate([
        core_1.Injectable()
    ], AuthService);
    return AuthService;
}());
exports.AuthService = AuthService;

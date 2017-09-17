"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var rxjs_1 = require("rxjs");
var environment_1 = require("../../../../environments/environment");
var AuthenticatedHttpService = (function (_super) {
    __extends(AuthenticatedHttpService, _super);
    function AuthenticatedHttpService(backend, defaultOptions, authService) {
        _super.call(this, backend, defaultOptions);
        this.authService = authService;
    }
    AuthenticatedHttpService.prototype.request = function (url, options) {
        var _this = this;
        return _super.prototype.request.call(this, url, options).catch(function (error) {
            if ((error.status === 401 || error.status === 403) && (window.location.href.match(/\?/g) || []).length < 2) {
                _this.authService.authenticate().then(function () {
                    return _this.request(url, options);
                }, function (error) {
                    return rxjs_1.Observable.throw(error);
                });
            }
            else {
                return rxjs_1.Observable.throw(error);
            }
        });
    };
    AuthenticatedHttpService.prototype.get = function (url, options) {
        url = this.updateUrl(url);
        return _super.prototype.get.call(this, url, this.getRequestOptionArgs(options));
    };
    AuthenticatedHttpService.prototype.post = function (url, body, options) {
        url = this.updateUrl(url);
        return _super.prototype.post.call(this, url, body, this.getRequestOptionArgs(options));
    };
    AuthenticatedHttpService.prototype.put = function (url, body, options) {
        url = this.updateUrl(url);
        return _super.prototype.put.call(this, url, body, this.getRequestOptionArgs(options));
    };
    AuthenticatedHttpService.prototype.delete = function (url, options) {
        url = this.updateUrl(url);
        return _super.prototype.delete.call(this, url, this.getRequestOptionArgs(options));
    };
    AuthenticatedHttpService.prototype.updateUrl = function (req) {
        return environment_1.environment.serviceBaseUrl + req;
    };
    AuthenticatedHttpService.prototype.getRequestOptionArgs = function (options) {
        if (options == null) {
            options = new http_1.RequestOptions();
        }
        if (options.headers == null) {
            options.headers = new http_1.Headers();
        }
        options.headers.append('Content-Type', 'application/json');
        return options;
    };
    AuthenticatedHttpService = __decorate([
        core_1.Injectable()
    ], AuthenticatedHttpService);
    return AuthenticatedHttpService;
}(http_1.Http));
exports.AuthenticatedHttpService = AuthenticatedHttpService;

"use strict";
var AuthResponse = (function () {
    function AuthResponse() {
    }
    AuthResponse.prototype.getAccessToken = function () {
        return this.accessToken;
    };
    AuthResponse.prototype.getTokenType = function () {
        return this.tokenType;
    };
    AuthResponse.prototype.getRefreshToken = function () {
        return this.refreshToken;
    };
    AuthResponse.prototype.getExpiresIn = function () {
        return this.expiresIn;
    };
    AuthResponse.prototype.getScope = function () {
        return this.scope;
    };
    AuthResponse.prototype.serialize = function () {
        var output = {};
        output['access_token'] = this.accessToken;
        output['token_type'] = this.tokenType;
        output['refresh_token'] = this.refreshToken;
        output['expires_in'] = this.expiresIn;
        output['scope'] = this.scope;
        return output;
    };
    AuthResponse.prototype.deserialize = function (input) {
        this.accessToken = input['access_token'];
        this.tokenType = input['token_type'];
        this.refreshToken = input['refresh_token'];
        this.expiresIn = +input['expires_in'];
        this.scope = input['scope'];
        return this;
    };
    return AuthResponse;
}());
exports.AuthResponse = AuthResponse;

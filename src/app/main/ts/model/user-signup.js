"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var user_1 = require("./user");
var UserSignup = (function (_super) {
    __extends(UserSignup, _super);
    function UserSignup() {
        _super.call(this);
    }
    UserSignup.prototype.getPassword = function () {
        return this.password;
    };
    UserSignup.prototype.setPassword = function (password) {
        this.password = password;
    };
    UserSignup.prototype.getConfirmPassword = function () {
        return this.confirmPassword;
    };
    UserSignup.prototype.setConfirmPassword = function (confirmPassword) {
        this.confirmPassword = confirmPassword;
    };
    return UserSignup;
}(user_1.User));
exports.UserSignup = UserSignup;

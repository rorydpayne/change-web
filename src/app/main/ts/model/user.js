"use strict";
var User = (function () {
    function User() {
    }
    User.prototype.getFirstName = function () {
        return this.firstName;
    };
    User.prototype.setFirstName = function (value) {
        this.firstName = value;
    };
    User.prototype.getLastName = function () {
        return this.lastName;
    };
    User.prototype.setLastName = function (value) {
        this.lastName = value;
    };
    User.prototype.getEmail = function () {
        return this.email;
    };
    User.prototype.setEmail = function (value) {
        this.email = value;
    };
    return User;
}());
exports.User = User;

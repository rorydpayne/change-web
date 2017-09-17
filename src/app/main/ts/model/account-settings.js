"use strict";
var AccountSettings = (function () {
    function AccountSettings(id, currencyCode, weeklyDeposit, roundupsEnabled, account) {
        this.id = id;
        this.currencyCode = currencyCode;
        this.weeklyDeposit = weeklyDeposit;
        this.roundupsEnabled = roundupsEnabled;
        this.account = account;
    }
    AccountSettings.prototype.getId = function () {
        return this.id;
    };
    AccountSettings.prototype.setId = function (value) {
        this.id = value;
    };
    AccountSettings.prototype.getCurrencyCode = function () {
        return this.currencyCode;
    };
    AccountSettings.prototype.setCurrencyCode = function (value) {
        this.currencyCode = value;
    };
    AccountSettings.prototype.getWeeklyDeposit = function () {
        return this.weeklyDeposit;
    };
    AccountSettings.prototype.setWeeklyDeposit = function (value) {
        this.weeklyDeposit = value;
    };
    AccountSettings.prototype.getRoundupsEnabled = function () {
        return this.roundupsEnabled;
    };
    AccountSettings.prototype.setRoundupsEnabled = function (value) {
        this.roundupsEnabled = value;
    };
    AccountSettings.prototype.getAccount = function () {
        return this.account;
    };
    AccountSettings.prototype.setAccount = function (value) {
        this.account = value;
    };
    return AccountSettings;
}());
exports.AccountSettings = AccountSettings;

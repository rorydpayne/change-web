"use strict";
var MonetaryAmount = (function () {
    function MonetaryAmount(currencyCode, amount) {
        this.currencyCode = currencyCode;
        this.amount = amount;
    }
    MonetaryAmount.prototype.getCurrencyCode = function () {
        return this.currencyCode;
    };
    MonetaryAmount.prototype.getAmount = function () {
        return this.amount;
    };
    return MonetaryAmount;
}());
exports.MonetaryAmount = MonetaryAmount;

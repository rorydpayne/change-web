"use strict";
var environment_1 = require("../../../../environments/environment");
var Login = (function () {
    function Login() {
        this.client_id = environment_1.environment.auth.clientId;
        this.email = this.password = '';
    }
    return Login;
}());
exports.Login = Login;

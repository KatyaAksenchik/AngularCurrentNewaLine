"use strict";
var data_1 = require("./data");
var user_1 = require("./user");
var UserService = (function () {
    function UserService() {
        this.users = data_1.users;
    }
    UserService.prototype.getUsers = function () {
        return this.users;
    };
    UserService.prototype.addUser = function (user) {
        var newUser = new user_1.User(user.login, user.password, user.email, user.userName, user.birthday, user.phoneNumber);
        data_1.users.push(newUser);
        this.setActiveUser(newUser);
        alert("Вы зарегистрировались!");
    };
    UserService.prototype.setActiveUser = function (user) {
        localStorage.setItem('ActiveUser', JSON.stringify(user));
        alert("Look to Storage");
    };
    UserService.prototype.checkActiveUser = function () {
        return JSON.parse(localStorage.getItem('ActiveUser'));
    };
    UserService.prototype.checkIfUserExist = function (userModel) {
        var result;
        for (var i = 0; i < data_1.users.length; i++) {
            if (userModel.login == data_1.users[i].login && userModel.password == data_1.users[i].password) {
                result = {
                    userInfo: data_1.users[i],
                    userExist: true
                };
                break;
            }
            else {
                result = { userExist: false };
            }
        }
        return result;
    };
    UserService.prototype.clearStorage = function () {
        localStorage.setItem('ActiveUser', JSON.stringify({ login: "" }));
    };
    return UserService;
}());
exports.UserService = UserService;
//# sourceMappingURL=user.service.js.map
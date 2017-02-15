"use strict";
var User = (function () {
    function User(login, password, email, userName, birthday, phoneNumber) {
        this.login = login;
        this.password = password;
        this.email = email;
        this.userName = userName;
        this.birthday = birthday;
        this.phoneNumber = phoneNumber;
    }
    return User;
}());
exports.User = User;
//# sourceMappingURL=user.js.map
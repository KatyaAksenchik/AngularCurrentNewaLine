"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var Subject_1 = require("rxjs/Subject");
var Observable_1 = require("rxjs/Observable");
require("rxjs/add/operator/map");
require("rxjs/add/operator/catch");
require("rxjs/add/observable/throw");
var user_1 = require("./user");
var UserService = (function () {
    function UserService(http) {
        this.http = http;
        this.apiUrl = 'api/users';
        this.activeUser = {};
        this.emitLoginChange = new Subject_1.Subject();
        this.emitLoginChange$ = this.emitLoginChange.asObservable();
    }
    UserService.prototype.getUsers = function () {
        return this.http.get(this.apiUrl)
            .map(function (res) { return res.json().data; })
            .catch(this.handleError);
    };
    UserService.prototype.getUser = function (param) {
        var params = new http_1.URLSearchParams();
        for (var key in param) {
            if (param.hasOwnProperty(key)) {
                var val = param[key];
                params.set(key, val);
            }
        }
        var headers = new http_1.Headers({ 'Content-Type': 'aplication/json' });
        var options = new http_1.RequestOptions({ headers: headers, search: params });
        return this.http
            .get(this.apiUrl, options)
            .map(function (res) { return res.json().data; })
            .catch(this.handleError);
    };
    UserService.prototype.addUser = function (user) {
        var headers = new http_1.Headers({ 'Content-Type': 'aplication/json' });
        var options = new http_1.RequestOptions({ headers: headers });
        var newUser = new user_1.User(user.login, user.password, user.email, user.userName, user.birthday, user.phoneNumber);
        return this.http.post(this.apiUrl, newUser, options)
            .map(function (res) { return res.json().data; })
            .catch(this.handleError);
    };
    UserService.prototype.handleError = function (error) {
        console.error('Ошибка', error);
        return Observable_1.Observable.throw(error.message || error);
    };
    UserService.prototype.setActiveUser = function (user) {
        localStorage.setItem('ActiveUser', JSON.stringify(user));
    };
    UserService.prototype.checkActiveUser = function () {
        return JSON.parse(localStorage.getItem('ActiveUser'));
    };
    UserService.prototype.clearStorage = function () {
        localStorage.setItem('ActiveUser', JSON.stringify([{ login: "" }]));
    };
    UserService.prototype.displayEditButtons = function (currentArticle) {
        var user = this.checkActiveUser()[0];
        if (user.login == "") {
            return false;
        }
        else if (user.login == currentArticle.authorLogin) {
            return true;
        }
        else
            return false;
    };
    UserService.prototype.emitChange = function () {
        this.emitLoginChange.next();
    };
    return UserService;
}());
UserService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], UserService);
exports.UserService = UserService;
//# sourceMappingURL=user.service.js.map
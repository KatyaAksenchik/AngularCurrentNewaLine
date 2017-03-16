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
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
// import { users } from '../shared/data';
// import { User } from '../shared/user';
var user_service_1 = require('../shared/user.service');
require('rxjs/Rx');
var LogInComponent = (function () {
    function LogInComponent(router, userService) {
        var _this = this;
        this.router = router;
        this.userService = userService;
        this.model = {
            userName: "",
            formValid: true,
            showAddition: false,
            showForm: false
        };
        this.entranceModel = {
            userName: "Войти",
            formValid: false,
            showAddition: false,
            showForm: true
        };
        this.userModel = {
            login: "",
            password: ""
        };
        this.userService.emitLoginChange$.subscribe(function (res) {
            _this.buildLogIn();
        });
    }
    ;
    LogInComponent.prototype.ngOnInit = function () {
        this.buildLogIn();
    };
    LogInComponent.prototype.buildLogIn = function () {
        if (this.userService.checkActiveUser().login !== "") {
            this.model.userName = this.userService.checkActiveUser()[0].login;
            this.model.showAddition = true;
        }
        else {
            this.model.userName = "Войти";
        }
    };
    LogInComponent.prototype.openForm = function () {
        this.model.showForm = !this.model.showForm;
    };
    LogInComponent.prototype.toRegistrationPage = function () {
        this.model.showForm = false;
        this.router.navigate(['/registration']);
    };
    LogInComponent.prototype.onSubmit = function () {
        var _this = this;
        this.userService.getUser(this.userModel).subscribe(function (res) {
            if (res.length > 0) {
                _this.model = {
                    userName: _this.userModel.login,
                    formValid: true,
                    showForm: false,
                    showAddition: true
                };
                _this.userService.setActiveUser(res);
                _this.userModel = {
                    login: "",
                    password: ""
                };
            }
            else {
                _this.model = _this.entranceModel;
            }
        });
    };
    LogInComponent.prototype.logOut = function () {
        this.userService.clearStorage();
        this.model = this.entranceModel;
        this.router.navigate(['/mainPage']);
    };
    LogInComponent = __decorate([
        core_1.Component({
            selector: 'logIn',
            templateUrl: './app/logIn/logIn.component.html'
        }), 
        __metadata('design:paramtypes', [router_1.Router, user_service_1.UserService])
    ], LogInComponent);
    return LogInComponent;
}());
exports.LogInComponent = LogInComponent;
//# sourceMappingURL=logIn.component.js.map
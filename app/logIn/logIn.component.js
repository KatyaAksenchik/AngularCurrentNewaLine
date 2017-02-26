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
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
// import { users } from '../shared/data';
// import { User } from '../shared/user';
var user_service_1 = require("../shared/user.service");
var LogInComponent = (function () {
    function LogInComponent(router, userService) {
        this.router = router;
        this.userService = userService;
        this.model = {
            userName: "",
            formValid: true,
            showAddition: false,
            showForm: false
        };
        this.userModel = {
            login: "",
            password: ""
        };
    }
    ;
    LogInComponent.prototype.ngOnInit = function () {
        if (this.userService.checkActiveUser().login !== "") {
            this.model.userName = this.userService.checkActiveUser().login;
            this.model.showAddition = true;
        }
        else {
            this.model.userName = "Войти";
        }
    };
    LogInComponent.prototype.clear = function () {
        this.userService.clearStorage();
    };
    LogInComponent.prototype.openForm = function () {
        this.model.showForm = !this.model.showForm;
    };
    LogInComponent.prototype.onSubmit = function () {
        var validationResult = this.userService.checkIfUserExist(this.userModel);
        if (validationResult.userExist) {
            this.model = {
                userName: this.userModel.login,
                formValid: true,
                showForm: false,
                showAddition: true
            };
            this.userService.setActiveUser(validationResult.userInfo);
            this.userModel = {
                login: "",
                password: ""
            };
        }
        else {
            this.model = {
                userName: "Войти",
                formValid: false,
                showAddition: false,
                showForm: true
            };
        }
    };
    LogInComponent.prototype.logOut = function () {
        this.userService.clearStorage();
        this.model = {
            userName: "Войти",
            formValid: false,
            showAddition: false,
            showForm: true
        };
        this.router.navigate(['/mainPage']);
    };
    return LogInComponent;
}());
LogInComponent = __decorate([
    core_1.Component({
        selector: 'logIn',
        templateUrl: './app/logIn/logIn.component.html'
    }),
    __metadata("design:paramtypes", [router_1.Router, user_service_1.UserService])
], LogInComponent);
exports.LogInComponent = LogInComponent;
// this.model.formTrue=false;
// for(let i=0; i<users.length; i++){
//     if(this.model.login==users[i].login && this.model.password==users[i].password){
//         alert("Вы зарегистрировались");
//         this.model={
//             userName: this.model.login,
//             login: "",
//             password: "",
//             formTrue: true,
//             showAddition: true,
//             showForm: false,
//         }
//     }
// } 
//# sourceMappingURL=logIn.component.js.map
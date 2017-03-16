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
var article_service_1 = require("../shared/article.service");
var user_service_1 = require("../shared/user.service");
var router_1 = require("@angular/router");
var MainPageComponent = (function () {
    function MainPageComponent(route, articleService, userService) {
        this.route = route;
        this.articleService = articleService;
        this.userService = userService;
        this.articles = [];
    }
    ;
    MainPageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.articleService.getArticles().subscribe(function (articles) {
            _this.articles = articles;
        });
    };
    return MainPageComponent;
}());
MainPageComponent = __decorate([
    core_1.Component({
        selector: 'mainPage',
        templateUrl: './app/mainPage/mainPage.component.html'
    }),
    __metadata("design:paramtypes", [router_1.Router, article_service_1.ArticleService, user_service_1.UserService])
], MainPageComponent);
exports.MainPageComponent = MainPageComponent;
//# sourceMappingURL=mainPage.component.js.map
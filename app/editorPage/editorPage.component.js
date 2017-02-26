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
var article_1 = require("../shared/article");
var article_service_1 = require("../shared/article.service");
var user_service_1 = require("../shared/user.service");
var router_1 = require("@angular/router");
var EditorPageComponent = (function () {
    function EditorPageComponent(router, articleService, userService) {
        this.router = router;
        this.articleService = articleService;
        this.userService = userService;
        this.articles = [];
    }
    ;
    EditorPageComponent.prototype.ngOnInit = function () {
        // this.activeUser=this.userService.checkActiveUser();
        // this.articles=this.articleService.getUserArticles(this.activeUser.login);
        // this.currentArticle= new Article(null, "", "", "", this.activeUser.login);
        this.buildComponent();
    };
    EditorPageComponent.prototype.buildComponent = function () {
        this.activeUser = this.userService.checkActiveUser();
        this.articles = this.articleService.getUserArticles(this.activeUser.login);
        this.currentArticle = new article_1.Article(null, "", "", "", this.activeUser.login);
    };
    EditorPageComponent.prototype.delete = function (article) {
        this.articleService.deleteArticle(article);
    };
    EditorPageComponent.prototype.publishArticle = function (article) {
        this.articleService.publishArticle(article);
    };
    EditorPageComponent.prototype.addArticle = function (currentArticle) {
        this.articleService.addArticle(currentArticle);
        this.buildComponent();
    };
    EditorPageComponent.prototype.edit = function (article) {
        this.currentArticle = this.articleService.editArticle(article, this.currentArticle);
        this.articleService.deleteArticle(article);
    };
    EditorPageComponent.prototype.direct = function (article) {
        this.router.navigate(['/newsPage', article.id]);
    };
    return EditorPageComponent;
}());
EditorPageComponent = __decorate([
    core_1.Component({
        selector: 'editorPage',
        templateUrl: './app/editorPage/editorPage.component.html'
    }),
    __metadata("design:paramtypes", [router_1.Router, article_service_1.ArticleService, user_service_1.UserService])
], EditorPageComponent);
exports.EditorPageComponent = EditorPageComponent;
//# sourceMappingURL=editorPage.component.js.map
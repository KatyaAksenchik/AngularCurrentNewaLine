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
var data_1 = require("../shared/data");
var router_1 = require("@angular/router");
var router_2 = require("@angular/router");
var EditorPageComponent = (function () {
    function EditorPageComponent(route, router, articleService, userService) {
        this.route = route;
        this.router = router;
        this.articleService = articleService;
        this.userService = userService;
        this.tags = data_1.tags;
        this.articles = [];
    }
    ;
    EditorPageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.buildComponent();
        this.route.params.subscribe(function (params) {
            _this.id = +params['id'];
        });
        if (isNaN(this.id) == false) {
            if (this.id !== 0) {
                this.editState = "Редактирование новости";
                this.currentArticle = this.articleService.findArticle(this.id);
                this.articleService.deleteArticle(this.currentArticle);
            }
            else {
                this.currentArticle = this.articleService.getTemporaryArticle();
            }
        }
    };
    EditorPageComponent.prototype.buildComponent = function () {
        this.editState = "Создание новости";
        this.activeUser = this.userService.checkActiveUser();
        this.articles = this.articleService.getArticles();
        this.currentArticle = new article_1.Article(null, "", "", "", "", "", this.activeUser.userName, "" + (new Date()), this.activeUser.login);
    };
    EditorPageComponent.prototype.delete = function (article) {
        this.articleService.deleteArticle(article);
    };
    EditorPageComponent.prototype.changePublishState = function (article) {
        this.articleService.publishArticle(article);
    };
    EditorPageComponent.prototype.addArticle = function (currentArticle) {
        this.articleService.addArticle(currentArticle);
        this.buildComponent();
    };
    EditorPageComponent.prototype.edit = function (article) {
        this.editState = "Редактирование новости";
        this.currentArticle = this.articleService.editArticle(article, this.currentArticle);
        this.articleService.deleteArticle(article);
    };
    EditorPageComponent.prototype.direct = function (article) {
        this.router.navigate(['/newsPage', article.id]);
    };
    EditorPageComponent.prototype.publishArticle = function (currentArticle) {
        currentArticle.published = true;
        this.addArticle(currentArticle);
    };
    EditorPageComponent.prototype.previewPage = function (currentArticle) {
        this.articleService.setTemporaryArticle(currentArticle);
        this.router.navigate(['/newsPage', 0]);
    };
    return EditorPageComponent;
}());
EditorPageComponent = __decorate([
    core_1.Component({
        selector: 'editorPage',
        templateUrl: './app/editorPage/editorPage.component.html'
    }),
    __metadata("design:paramtypes", [router_2.ActivatedRoute, router_1.Router, article_service_1.ArticleService, user_service_1.UserService])
], EditorPageComponent);
exports.EditorPageComponent = EditorPageComponent;
//# sourceMappingURL=editorPage.component.js.map
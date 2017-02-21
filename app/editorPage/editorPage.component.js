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
var router_1 = require("@angular/router");
var EditorPageComponent = (function () {
    function EditorPageComponent(router, articleService) {
        this.router = router;
        this.articleService = articleService;
        this.selector = {
            model: ""
        };
        this.currentArticle = new article_1.Article(null, "", "", "", "");
        this.articles = [];
    }
    ;
    EditorPageComponent.prototype.ngOnInit = function () {
        this.articles = this.articleService.articles;
        this.len = this.articleService.articles.length - 1;
        this.currentArticle.id = this.articles[this.len].id + 1;
    };
    EditorPageComponent.prototype.delete = function (article) {
        this.articleService.deleteArticle(article);
    };
    EditorPageComponent.prototype.publishArticle = function (article) {
        this.articleService.publishArticle(article);
    };
    EditorPageComponent.prototype.addArticle = function (currentArticle) {
        this.articleService.addArticle(currentArticle);
    };
    EditorPageComponent.prototype.edit = function (article) {
        this.currentArticle = this.articleService.editArticle(article, this.currentArticle);
        this.articleService.deleteArticle(article);
    };
    EditorPageComponent.prototype.direct = function (article) {
        this.router.navigate(['/newsPage', article.id]);
    };
    EditorPageComponent.prototype.select = function () {
        console.log(this.selector);
    };
    return EditorPageComponent;
}());
EditorPageComponent = __decorate([
    core_1.Component({
        selector: 'editorPage',
        templateUrl: './app/editorPage/editorPage.component.html'
    }),
    __metadata("design:paramtypes", [router_1.Router, article_service_1.ArticleService])
], EditorPageComponent);
exports.EditorPageComponent = EditorPageComponent;
//# sourceMappingURL=editorPage.component.js.map
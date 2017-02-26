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
var article_service_1 = require("../shared/article.service");
var router_1 = require("@angular/router");
var NewsPageComponent = (function () {
    function NewsPageComponent(route, articleService) {
        this.route = route;
        this.articleService = articleService;
        this.articles = [];
    }
    ;
    NewsPageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.articles = this.articleService.articles;
        this.route.params.subscribe(function (params) {
            _this.id = +params['id'];
        });
        this.currentArticles = this.articleService.findArticle(this.id);
    };
    return NewsPageComponent;
}());
NewsPageComponent = __decorate([
    core_1.Component({
        selector: 'newsPage',
        templateUrl: './app/newsPage/newsPage.component.html'
    }),
    __metadata("design:paramtypes", [router_1.ActivatedRoute, article_service_1.ArticleService])
], NewsPageComponent);
exports.NewsPageComponent = NewsPageComponent;
//# sourceMappingURL=newsPage.component.js.map
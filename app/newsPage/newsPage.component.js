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
var article_service_1 = require('../shared/article.service');
var user_service_1 = require('../shared/user.service');
var router_1 = require('@angular/router');
var router_2 = require('@angular/router');
var NewsPageComponent = (function () {
    function NewsPageComponent(route, router, articleService, userService) {
        this.route = route;
        this.router = router;
        this.articleService = articleService;
        this.userService = userService;
        this.articles = [];
    }
    ;
    NewsPageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.articles = this.articleService.getArticles();
        this.route.params.subscribe(function (params) {
            _this.id = +params['id'];
            if (_this.id == 0) {
                _this.currentArticles = _this.articleService.getTemporaryArticle();
            }
            else {
                _this.currentArticles = _this.articleService.findArticle(_this.id);
            }
            _this.model = _this.userService.displayEditButtons(_this.currentArticles);
        });
    };
    NewsPageComponent.prototype.deleteArticle = function () {
        this.router.navigate(['/mainPage']);
        if (this.id !== 0) {
            this.articleService.deleteArticle(this.currentArticles);
        }
        {
            this.articleService.clearTemporaryArticle();
            this.router.navigate(['/editorPage']);
        }
    };
    NewsPageComponent.prototype.directToEdit = function () {
        this.router.navigate(['/editorPage', this.currentArticles.id]);
    };
    NewsPageComponent = __decorate([
        core_1.Component({
            selector: 'newsPage',
            templateUrl: './app/newsPage/newsPage.component.html'
        }), 
        __metadata('design:paramtypes', [router_1.ActivatedRoute, router_2.Router, article_service_1.ArticleService, user_service_1.UserService])
    ], NewsPageComponent);
    return NewsPageComponent;
}());
exports.NewsPageComponent = NewsPageComponent;
//# sourceMappingURL=newsPage.component.js.map
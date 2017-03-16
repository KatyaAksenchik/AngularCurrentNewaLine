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
require("rxjs/add/operator/map");
require("rxjs/add/operator/switchMap");
require("rxjs/add/observable/of");
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var article_1 = require("../shared/article");
var article_service_1 = require("../shared/article.service");
var user_service_1 = require("../shared/user.service");
var router_2 = require("@angular/router");
var NewsPageComponent = (function () {
    function NewsPageComponent(articleService, userService, route, router) {
        this.articleService = articleService;
        this.userService = userService;
        this.route = route;
        this.router = router;
    }
    NewsPageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.article = new article_1.Article(null, "", "", "", "", "", "", "", "");
        this.route.params
            .map(function (params) { return params['id']; })
            .switchMap(function (id) {
            _this.id = id;
            if (id !== "0") {
                return _this.articleService.getArticle(id);
            }
            else {
                return Observable.of(_this.articleService.getTemporaryArticle());
            }
        })
            .subscribe(function (article) {
            _this.article = article;
            _this.hiddenButton = _this.userService.displayEditButtons(article);
        });
    };
    NewsPageComponent.prototype.deleteArticle = function (article) {
        this.router.navigate(['/mainPage']);
        if (this.id !== "0") {
            this.articleService.deleteArticle(article).subscribe(function (res) {
                article = null;
            });
        }
        else {
            this.articleService.clearTemporaryArticle();
        }
    };
    NewsPageComponent.prototype.directToEdit = function () {
        this.router.navigate(['/editorPage', this.article.id]);
    };
    return NewsPageComponent;
}());
NewsPageComponent = __decorate([
    core_1.Component({
        selector: 'newsPage',
        templateUrl: './app/newsPage/newsPage.component.html'
    }),
    __metadata("design:paramtypes", [article_service_1.ArticleService,
        user_service_1.UserService,
        router_1.ActivatedRoute,
        router_2.Router])
], NewsPageComponent);
exports.NewsPageComponent = NewsPageComponent;
//# sourceMappingURL=newsPage.component.js.map
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
var router_2 = require('@angular/router');
var article_service_1 = require('../shared/article.service');
var user_service_1 = require('../shared/user.service');
var article_1 = require('../shared/article');
var extra_data_1 = require('../shared/extra.data');
var EditorPageComponent = (function () {
    function EditorPageComponent(route, router, articleService, userService) {
        this.route = route;
        this.router = router;
        this.articleService = articleService;
        this.userService = userService;
        this.tags = extra_data_1.tags;
        this.articles = [];
    }
    ;
    EditorPageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.buildComponent();
        this.route.params
            .map(function (params) { return params['id']; })
            .switchMap(function (id) {
            if (isNaN(id) == false) {
                if (id !== "0") {
                    _this.editState = "Редактирование новости";
                    return _this.articleService.getArticle(id);
                }
                else {
                    return Observable.of(_this.articleService.getTemporaryArticle());
                }
            }
            else {
                return Observable.of(_this.currentArticle);
            }
        })
            .subscribe(function (article) {
            _this.currentArticle = article;
            _this.articleService.deleteArticle(_this.currentArticle);
        });
    };
    EditorPageComponent.prototype.buildComponent = function () {
        var _this = this;
        this.editState = "Создание новости";
        this.activeUser = this.userService.checkActiveUser()[0];
        this.articleService.getArticles().subscribe(function (articles) { return _this.articles = articles; });
        this.currentArticle = new article_1.Article(null, "", "", "", "", "", this.activeUser.userName, "" + (new Date()), this.activeUser.login);
    };
    EditorPageComponent.prototype.add = function (currentArticle) {
        var _this = this;
        this.articleService.addArticle(currentArticle).subscribe(function (newArticle) { return _this.articles.push(newArticle); });
        this.buildComponent();
    };
    EditorPageComponent.prototype.addArticle = function (currentArticle) {
        currentArticle.published = false;
        this.add(currentArticle);
    };
    EditorPageComponent.prototype.publishArticle = function (currentArticle) {
        currentArticle.published = true;
        // this.addArticle(currentArticle);
        this.add(currentArticle);
    };
    EditorPageComponent.prototype.delete = function (article) {
        var _this = this;
        this.articleService.deleteArticle(article).subscribe(function (res) {
            var index = _this.articles.indexOf(article);
            if (index > -1) {
                _this.articles.splice(index, 1);
            }
        });
    };
    EditorPageComponent.prototype.changePublishState = function (article) {
        article.published = !article.published;
        article.publishDate = "" + (new Date());
        this.articleService.updateArticle(article).subscribe();
    };
    EditorPageComponent.prototype.edit = function (article) {
        this.editState = "Редактирование новости";
        this.currentArticle = {
            id: article.id,
            articleName: article.articleName,
            imgUrl: article.imgUrl,
            tag: article.tag,
            previewText: article.previewText,
            articleText: article.articleText,
            authorName: article.authorName,
            publishDate: article.publishDate,
            authorLogin: article.authorLogin,
            published: article.published
        };
        this.delete(article);
    };
    EditorPageComponent.prototype.direct = function (article) {
        this.router.navigate(['/newsPage', article.id]);
    };
    EditorPageComponent.prototype.previewPage = function (currentArticle) {
        this.articleService.setTemporaryArticle(currentArticle);
        this.router.navigate(['/newsPage', 0]);
    };
    EditorPageComponent.prototype.onChange = function (val) {
        this.currentArticle.tag = JSON.parse(val);
        this.selectedDevice = JSON.parse(val);
    };
    EditorPageComponent = __decorate([
        core_1.Component({
            selector: 'editorPage',
            templateUrl: './app/editorPage/editorPage.component.html'
        }), 
        __metadata('design:paramtypes', [router_1.ActivatedRoute, router_2.Router, article_service_1.ArticleService, user_service_1.UserService])
    ], EditorPageComponent);
    return EditorPageComponent;
}());
exports.EditorPageComponent = EditorPageComponent;
//# sourceMappingURL=editorPage.component.js.map
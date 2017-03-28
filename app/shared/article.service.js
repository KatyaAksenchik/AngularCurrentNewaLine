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
var http_1 = require("@angular/http");
var Observable_1 = require("rxjs/Observable");
require("rxjs/add/operator/map");
require("rxjs/add/operator/catch");
require("rxjs/add/observable/throw");
var article_1 = require("./article");
var ArticleService = (function () {
    function ArticleService(http) {
        this.http = http;
        this.apiUrl = 'api/articles';
        this.id = 8;
        this.localStorageId = 0;
    }
    ArticleService.prototype.getArticles = function () {
        return this.http.get(this.apiUrl)
            .map(function (res) { return res.json().data; })
            .catch(this.handleError);
    };
    ArticleService.prototype.getArticle = function (id) {
        var url = this.apiUrl + "/" + id;
        return this.http.get(url)
            .map(function (res) { return res.json().data; })
            .catch(this.handleError);
    };
    ArticleService.prototype.addArticle = function (article) {
        var headers = new http_1.Headers({ 'Content-Type': 'aplication/json' });
        var options = new http_1.RequestOptions({ headers: headers });
        var newArticle = new article_1.Article(this.id, article.articleName, article.imgUrl, article.tag, article.previewText, article.articleText, article.authorName, article.publishDate, article.authorLogin, article.published);
        this.id++;
        return this.http.post(this.apiUrl, newArticle, options)
            .map(function (res) { return res.json().data; })
            .catch(this.handleError);
    };
    ArticleService.prototype.deleteArticle = function (article) {
        var headers = new http_1.Headers({ 'Content-Type': 'aplication/json' });
        var options = new http_1.RequestOptions({ headers: headers });
        var url = this.apiUrl + "/" + article.id;
        return this.http.delete(url, options)
            .catch(this.handleError);
    };
    ArticleService.prototype.updateArticle = function (article) {
        var headers = new http_1.Headers({ 'Content-Type': 'aplication/json' });
        var options = new http_1.RequestOptions({ headers: headers });
        var url = this.apiUrl + "/" + article.id;
        return this.http.put(url, article, options)
            .catch(this.handleError);
    };
    ArticleService.prototype.handleError = function (error) {
        console.error('Ошибка', error);
        return Observable_1.Observable.throw(error.message || error);
    };
    ArticleService.prototype.setTemporaryArticle = function (currentArticle) {
        var existingEntries = JSON.parse(sessionStorage.getItem('PreviewPage'));
        if (existingEntries == null) {
            existingEntries = [];
        }
        sessionStorage.setItem("entry", JSON.stringify(currentArticle));
        existingEntries.push(currentArticle);
        sessionStorage.setItem("PreviewPage", JSON.stringify(existingEntries));
    };
    ArticleService.prototype.getTemporaryArticle = function (id) {
        var existingEntries = JSON.parse(sessionStorage.getItem('PreviewPage'));
        var searchItem;
        existingEntries.forEach(function (item) {
            if (item.id == id) {
                searchItem = item;
            }
        });
        return searchItem;
    };
    ArticleService.prototype.clearTemporaryArticle = function () {
        sessionStorage.setItem('PreviewPage', JSON.stringify([]));
    };
    return ArticleService;
}());
ArticleService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], ArticleService);
exports.ArticleService = ArticleService;
//# sourceMappingURL=article.service.js.map
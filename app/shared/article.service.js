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
var http_1 = require('@angular/http');
var Observable_1 = require('rxjs/Observable');
require('rxjs/add/operator/map');
require('rxjs/add/operator/catch');
require('rxjs/add/observable/throw');
var article_1 = require('./article');
var ArticleService = (function () {
    function ArticleService(http) {
        this.http = http;
        this.apiUrl = 'api/articles';
        this.id = 5;
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
        currentArticle.id = 0;
        localStorage.setItem('PreviewPage', JSON.stringify(currentArticle));
    };
    ArticleService.prototype.getTemporaryArticle = function () {
        return JSON.parse(localStorage.getItem('PreviewPage'));
    };
    ArticleService.prototype.clearTemporaryArticle = function () {
        localStorage.setItem('PreviewPage', JSON.stringify({}));
    };
    ArticleService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], ArticleService);
    return ArticleService;
}());
exports.ArticleService = ArticleService;
// // import  {articles} from './data';
// import {Injectable} from '@angular/core';
// import  {Article} from './article';
// import {Http, Headers, RequestOptions} from '@angular/http'
// // import { Observable } from 'rxjs/Observable';
// import 'rxjs/add/operator/toPromise';
// // import 'rxjs/add/operator/map';
// // import 'rxjs/add/operator/catch';
// // import 'rxjs/add/observable/throw';
//
//
// @Injectable()
// export class ArticleService {
//    
//    
//     private apiUrl = 'api/articles';
//
//     // articles = [];
//     // id = articles[articles.length - 1].id + 1;
//
//     constructor(private http:Http) {}
//
//     // getArticles() {
//     //     // return this.articles;
//     //     return this.http.get(this.apiUrl)
//     //         .map(res => res.json().data)
//     //         .catch(this.handleError)
//     // }
//
//     getArticles() {
//             // return this.articles;
//             return this.http.get(this.apiUrl)
//                 .toPromise()
//                 .then(res => res.json().data)
//                 .catch(this.handleError)
//     }
//
//     getArticle(id: number){
//         const url = `${this.apiUrl}/${id}`;
//         return this.http.get(url)
//             .toPromise()
//             .then(response => response.json().data)
//             .catch(this.handleError);
//     }
//    
//     private handleError(error: any): Promise<any> {
//         console.error('An error occurred', error);
//         return Promise.reject(error.message || error);
//     }
//     //
//     // setTemporaryArticle(currentArticle) {
//     //     currentArticle.id = 0;
//     //     this.temporaryArticle = currentArticle;
//     // }
//     //
//     // getTemporaryArticle() {
//     //     return this.temporaryArticle;
//     // }
//     //
//     // clearTemporaryArticle() {
//     //     this.temporaryArticle = {};
//     // }
//     //
//     // addArticle(currentArticle) {
//     //
//     //     let headers = new Headers({'Content-Type': 'aplication/json'});
//     //     let options = new RequestOptions({headers});
//     //
//     //     let newArticle = new Article(
//     //         this.id,
//     //         currentArticle.articleName,
//     //         currentArticle.imgUrl,
//     //         currentArticle.tag,
//     //         currentArticle.previewText,
//     //         currentArticle.articleText,
//     //         currentArticle.authorName,
//     //         currentArticle.publishDate,
//     //         currentArticle.authorLogin,
//     //         currentArticle.published
//     //     );
//     //     // this.articles.push(newArticle);
//     //     return this.http.post(this.apiUrl, newArticle, options)
//     //         .map(res => res.json().data)
//     //         .catch(this.handleError)
//     //
//     //     this.id++;
//     //
//     // }
//     //
//     // deleteArticle(article) {
//     //     let headers = new Headers({'Content-Type': 'aplication/json'});
//     //     let options = new RequestOptions({headers});
//     //     let url = `${this.apiUrl}/${article.id}`;
//     //
//     //
//     //     return this.http.delete(url, options)
//     //         .catch(this.handleError);
//     // }
//     //
//     // editArticle(article:Article, currentArticle) {
//     //     return currentArticle = {
//     //         id: article.id,
//     //         articleName: article.articleName,
//     //         imgUrl: article.imgUrl,
//     //         tag: article.tag,
//     //         previewText: article.previewText,
//     //         articleText: article.articleText,
//     //         authorName: article.authorName,
//     //         publishDate: article.publishDate,
//     //         authorLogin: article.authorLogin,
//     //         published: article.published
//     //     }
//     // }
//     //
//     // publishArticle(article:Article) {
//     //     // article.published = !article.published;
//     //     // article.publishDate = ""+(new Date());
//     //     let headers = new Headers({'Content-Type': 'aplication/json'});
//     //     let options = new RequestOptions({headers});
//     //     let url = `${this.apiUrl}/${article.id}`;
//     //
//     //     return this.http.put(url, article, options)
//     //         .catch(this.handleError)
//     // }
//     //
//     // // findArticle(id) {
//     // //     // for(let i=0; i<this.articles.length; i++){
//     // //     //     if(this.articles[i].id==id){
//     // //     //         return this.articles[i];
//     // //     //     }
//     // //     // }
//     // //     let url = `${this.apiUrl}/${id}`;
//     // //     return this.http.get(url)
//     // //         .map(res => res.json().data)
//     // //         .catch(this.handleError)
//     // // }
//     //
//     //
//     //
//     //
//     // findArticle() {
//     //     let url = `${this.apiUrl}/${id}`;
//     //     return this.http.get(url)
//     //         .toPromise()
//     //         .then(response => response.json().data)
//     //         .catch(this.handleError);
//     // }
//     //
//     //
//     // // private handleError(error) {
//     // //     console.error('Ошибка', error);
//     // //     return Observable.throw(error.message || error)
//     // // }
//
// }
//# sourceMappingURL=article.service.js.map
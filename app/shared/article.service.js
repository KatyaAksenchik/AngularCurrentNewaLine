"use strict";
var data_1 = require("./data");
var article_1 = require("./article");
var ArticleService = (function () {
    function ArticleService() {
        this.articles = data_1.articles;
        this.id = data_1.articles[data_1.articles.length - 1].id + 1;
    }
    ArticleService.prototype.getArticles = function () {
        return this.articles;
    };
    ArticleService.prototype.setTemporaryArticle = function (currentArticle) {
        currentArticle.id = 0;
        this.temporaryArticle = currentArticle;
    };
    ArticleService.prototype.getTemporaryArticle = function () {
        return this.temporaryArticle;
    };
    ArticleService.prototype.clearTemporaryArticle = function () {
        this.temporaryArticle = {};
    };
    ArticleService.prototype.addArticle = function (currentArticle) {
        var newArticle = new article_1.Article(this.id, currentArticle.articleName, currentArticle.imgUrl, currentArticle.tag, currentArticle.previewText, currentArticle.articleText, currentArticle.authorName, currentArticle.publishDate, currentArticle.authorLogin, currentArticle.published);
        this.articles.push(newArticle);
        this.id++;
        alert("Добавлена новость");
    };
    ArticleService.prototype.deleteArticle = function (article) {
        var index = this.articles.indexOf(article);
        if (index > -1) {
            this.articles.splice(index, 1);
        }
    };
    ArticleService.prototype.editArticle = function (article, currentArticle) {
        return currentArticle = {
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
    };
    ArticleService.prototype.publishArticle = function (article) {
        article.published = !article.published;
        article.publishDate = "" + (new Date());
    };
    ArticleService.prototype.findArticle = function (id) {
        for (var i = 0; i < this.articles.length; i++) {
            if (this.articles[i].id == id) {
                return this.articles[i];
            }
        }
    };
    return ArticleService;
}());
exports.ArticleService = ArticleService;
//# sourceMappingURL=article.service.js.map
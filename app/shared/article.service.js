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
    ArticleService.prototype.getUserArticles = function (user) {
        this.UserArticle = this.articles.filter(function (article) { return article.authorName === user; });
        console.log(this.UserArticle);
        return this.UserArticle;
    };
    ArticleService.prototype.addArticle = function (currentArticle) {
        console.log(this.id);
        var newArticle = new article_1.Article(this.id, currentArticle.articleName, currentArticle.imgUrl, currentArticle.tag, currentArticle.previewText, currentArticle.articleText, currentArticle.authorName);
        this.articles.push(newArticle);
        console.log(this.articles);
        this.UserArticle.push(newArticle);
        console.log(this.UserArticle);
        this.id++;
        alert("Добавлена новость");
    };
    ArticleService.prototype.deleteArticle = function (article) {
        var index = this.articles.indexOf(article);
        if (index > -1) {
            this.articles.splice(index, 1);
        }
        var index_user = this.UserArticle.indexOf(article);
        if (index_user > -1) {
            this.UserArticle.splice(index_user, 1);
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
            published: article.published
        };
    };
    ArticleService.prototype.publishArticle = function (article) {
        article.published = !article.published;
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
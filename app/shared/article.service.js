"use strict";
var data_1 = require("./data");
var article_1 = require("./article");
var ArticleService = (function () {
    function ArticleService() {
        this.articles = data_1.articles;
    }
    ArticleService.prototype.getArticles = function () {
        return this.articles;
    };
    ArticleService.prototype.addArticle = function (currentArticle) {
        var newArticle = new article_1.Article(currentArticle.id, currentArticle.articleName, currentArticle.imgUrl, currentArticle.articleText, "katya");
        this.articles.push(newArticle);
        alert("Добавлена новость");
    };
    ArticleService.prototype.deleteArticle = function (article) {
        console.log("delete");
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
            articleText: article.articleText,
            authorName: article.authorName,
            published: article.published
        };
    };
    ArticleService.prototype.publishArticle = function (article) {
        article.published = !article.published;
    };
    return ArticleService;
}());
exports.ArticleService = ArticleService;
//# sourceMappingURL=article.service.js.map
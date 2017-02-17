"use strict";
var Article = (function () {
    function Article(id, articleName, imgUrl, articleText, authorName, published) {
        if (published === void 0) { published = false; }
        this.id = id;
        this.articleName = articleName;
        this.imgUrl = imgUrl;
        this.articleText = articleText;
        this.authorName = authorName;
        this.published = published;
    }
    return Article;
}());
exports.Article = Article;
//# sourceMappingURL=article.js.map
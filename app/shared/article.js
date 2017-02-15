/**
 * Created by Katsiaryna on 9/02/2017.
 */
"use strict";
var Article = (function () {
    function Article(articleName, imgUrl, articleText, authorName, published) {
        if (published === void 0) { published = false; }
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
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var article_1 = require("../shared/article");
var data_1 = require("../shared/data");
var EditAreaComponent = (function () {
    function EditAreaComponent() {
        this.articles = data_1.articles;
        this.newArticle = new article_1.Article(" ", " ", " ", " ");
    }
    EditAreaComponent.prototype.addArticle = function (imgUrl, articleText) {
        var article = new article_1.Article(this.newArticle.articleName, imgUrl, articleText, "Katya");
        this.articles.push(article);
    };
    return EditAreaComponent;
}());
EditAreaComponent = __decorate([
    core_1.Component({
        selector: 'editArea',
        templateUrl: './app/editArea/editArea.component.html'
    })
], EditAreaComponent);
exports.EditAreaComponent = EditAreaComponent;
//# sourceMappingURL=editArea.component.js.map
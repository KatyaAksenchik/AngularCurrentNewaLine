"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var data_1 = require("../shared/data");
var EditPrvAreaComponent = (function () {
    function EditPrvAreaComponent() {
        this.articles = data_1.articles;
    }
    EditPrvAreaComponent.prototype.deleteArticle = function (article) {
        var index = this.articles.indexOf(article);
        if (index > -1) {
            this.articles.splice(index, 1);
        }
    };
    EditPrvAreaComponent.prototype.publishArticle = function (article) {
        article.published = true;
    };
    return EditPrvAreaComponent;
}());
EditPrvAreaComponent = __decorate([
    core_1.Component({
        selector: 'editPrvArea',
        templateUrl: './app/editPrvArea/editPrvArea.component.html'
    })
], EditPrvAreaComponent);
exports.EditPrvAreaComponent = EditPrvAreaComponent;
//# sourceMappingURL=editPrvArea.component.js.map
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
var article_1 = require("../shared/article");
var EditNewsComponent = (function () {
    function EditNewsComponent() {
        this.delete = new core_1.EventEmitter();
        this.changePublishState = new core_1.EventEmitter();
        this.edit = new core_1.EventEmitter();
        this.direct = new core_1.EventEmitter();
    }
    EditNewsComponent.prototype.onPublishArticle = function () {
        this.changePublishState.emit(this.article);
    };
    EditNewsComponent.prototype.onDelete = function () {
        this.delete.emit(this.article);
    };
    EditNewsComponent.prototype.onEditArticle = function () {
        this.edit.emit(this.article);
    };
    EditNewsComponent.prototype.onRedirectToNewsPage = function () {
        this.direct.emit(this.article);
    };
    return EditNewsComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", article_1.Article)
], EditNewsComponent.prototype, "article", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", article_1.Article)
], EditNewsComponent.prototype, "currentArticle", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], EditNewsComponent.prototype, "delete", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], EditNewsComponent.prototype, "changePublishState", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], EditNewsComponent.prototype, "edit", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], EditNewsComponent.prototype, "direct", void 0);
EditNewsComponent = __decorate([
    core_1.Component({
        selector: 'editnews',
        templateUrl: './app/editNews/editNews.component.html'
    })
], EditNewsComponent);
exports.EditNewsComponent = EditNewsComponent;
//# sourceMappingURL=editNews.component.js.map
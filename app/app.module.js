"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms");
var forms_2 = require("@angular/forms");
var http_1 = require("@angular/http");
var angular_in_memory_web_api_1 = require("angular-in-memory-web-api");
var app_component_1 = require("./app.component");
var editNews_component_1 = require("./editNews/editNews.component");
var editorPage_component_1 = require("./editorPage/editorPage.component");
var registration_component_1 = require("./registration/registration.component");
var newsPage_component_1 = require("./newsPage/newsPage.component");
var mainPage_component_1 = require("./mainPage/mainPage.component");
var logIn_component_1 = require("./logIn/logIn.component");
var data_1 = require("./shared/data");
var article_service_1 = require("./shared/article.service");
var app_routing_module_1 = require("./app-routing.module");
var user_service_1 = require("./shared/user.service");
var published_pipe_1 = require("./shared/published.pipe");
var user_article_pipe_1 = require("./shared/user.article.pipe");
var category_pipe_1 = require("./shared/category.pipe");
var not_category_pipe_1 = require("./shared/not.category.pipe");
var reverse_pipe_1 = require("./shared/reverse.pipe");
var asideNews_component_1 = require("./asideNews/asideNews.component");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [
            platform_browser_1.BrowserModule,
            forms_1.FormsModule,
            forms_2.ReactiveFormsModule,
            app_routing_module_1.AppRoutingModule,
            http_1.HttpModule,
            angular_in_memory_web_api_1.InMemoryWebApiModule.forRoot(data_1.InMemoryDataService)
        ],
        declarations: [
            app_component_1.AppComponent,
            editNews_component_1.EditNewsComponent,
            registration_component_1.RegistrationComponent,
            editorPage_component_1.EditorPageComponent,
            newsPage_component_1.NewsPageComponent,
            mainPage_component_1.MainPageComponent,
            logIn_component_1.LogInComponent,
            published_pipe_1.PublishedPipe,
            user_article_pipe_1.UserArticlePipe,
            category_pipe_1.CategoryPipe,
            reverse_pipe_1.ReversePipe,
            asideNews_component_1.AsideNewsComponent,
            not_category_pipe_1.NotCategoryPipe
        ],
        providers: [article_service_1.ArticleService,
            user_service_1.UserService],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map
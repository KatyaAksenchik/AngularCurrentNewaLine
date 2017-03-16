import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule }    from '@angular/http';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';


import { AppComponent } from './app.component';
import { EditNewsComponent }  from './editNews/editNews.component';
import { EditorPageComponent }  from './editorPage/editorPage.component';
import { RegistrationComponent }  from './registration/registration.component';
import { NewsPageComponent }  from './newsPage/newsPage.component';
import { MainPageComponent }  from './mainPage/mainPage.component';
import {LogInComponent} from "./logIn/logIn.component";
import {InMemoryDataService} from "./shared/data";

import { ArticleService } from './shared/article.service';
import { AppRoutingModule } from './app-routing.module';
import {UserService} from "./shared/user.service";
import {PublishedPipe} from "./shared/published.pipe";
import {UserArticlePipe} from "./shared/user.article.pipe";
import {CategoryPipe} from "./shared/category.pipe";
import {ReversePipe} from "./shared/reverse.pipe";
import {AsideNewsComponent} from "./asideNews/asideNews.component";

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        AppRoutingModule,
        HttpModule,
        InMemoryWebApiModule.forRoot(InMemoryDataService)
    ],
    declarations: [
        AppComponent,
        EditNewsComponent,
        RegistrationComponent,
        EditorPageComponent,
        NewsPageComponent,
        MainPageComponent,
        LogInComponent,
        PublishedPipe,
        UserArticlePipe,
        CategoryPipe,
        ReversePipe,
        AsideNewsComponent
    ],
    providers: [ArticleService,
                UserService],
    bootstrap: [AppComponent]
})
export class AppModule{}




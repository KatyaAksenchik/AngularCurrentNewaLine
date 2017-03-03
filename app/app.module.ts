import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { EditNewsComponent }  from './editNews/editNews.component';
import { EditorPageComponent }  from './editorPage/editorPage.component';
import { RegistrationComponent }  from './registration/registration.component';
import { NewsPageComponent }  from './newsPage/newsPage.component';
import { MainPageComponent }  from './mainPage/mainPage.component';
import {LogInComponent} from "./logIn/logIn.component";


import { ArticleService } from './shared/article.service';
import { AppRoutingModule } from './app-routing.module';
import {UserService} from "./shared/user.service";
import {PublishedPipe} from "./shared/published.pipe";
import {UserArticlePipe} from "./shared/user.article.pipe";
import {CategoryPipe} from "./shared/category.pipe";
import {ReversePipe} from "./shared/reverse.pipe";


@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        AppRoutingModule,
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
        ReversePipe
    ],
    providers: [ArticleService,
                UserService],
    bootstrap: [AppComponent]
})
export class AppModule{}




import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
// import { routing, appRoutingProviders } from './app-routing.module';


import { AppComponent } from './app.component';
import { EditNewsComponent }  from './editNews/editNews.component';
import { EditorPageComponent }  from './editorPage/editorPage.component';
import { RegistrationComponent }  from './registration/registration.component';
import { ArticleService } from './shared/article.service'


@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule
    ],
    declarations: [
        AppComponent,
        EditNewsComponent,
        RegistrationComponent,
        EditorPageComponent
    ],
    providers: [
        ArticleService
        // ,
        // appRoutingProviders
    ],
    bootstrap: [AppComponent]
})
export class AppModule{}




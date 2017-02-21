import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { EditorPageComponent }  from './editorPage/editorPage.component';
import { RegistrationComponent }  from './registration/registration.component';
import { NewsPageComponent }  from './newsPage/newsPage.component';
import {MainPageComponent} from "./mainPage/mainPage.component";


const routes: Routes = [
    { path: '', redirectTo: 'mainPage', pathMatch: 'full' },
    { path: 'editorPage', component: EditorPageComponent },
    { path: 'registration', component: RegistrationComponent  },
    { path: 'mainPage', component: MainPageComponent },
    { path: 'newsPage/:id', component: NewsPageComponent }
];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})
export class AppRoutingModule {}

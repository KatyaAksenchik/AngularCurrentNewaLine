import { Component } from '@angular/core';
import {articles} from './shared/data';

@Component({
    selector: "app",
    templateUrl:'./app/app.component.html'
})

export class AppComponent{
    title: string ="Current news line";
}

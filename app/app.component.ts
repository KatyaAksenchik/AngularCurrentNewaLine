import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: "app",
    templateUrl:'./app/app.component.html'
})

export class AppComponent{
    title: string ="Current news line";
    constructor (private router: Router) {};

}

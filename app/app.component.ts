import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {UserService} from "./shared/user.service";
import { ArticleService } from "./shared/article.service";

@Component({
    selector: "app",
    templateUrl: './app/app.component.html'
})

export class AppComponent implements OnInit {
    title:string = "Current news line";

    constructor(private router:Router, private userService:UserService, private articleService: ArticleService) {
    };

    ngOnInit() {
        this.articleService.clearTemporaryArticle();

        if (this.userService.checkActiveUser()) {
            return
        } else {
            this.userService.clearStorage();
        }
    }
}

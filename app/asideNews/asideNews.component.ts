import {Component, Input, Output, EventEmitter} from '@angular/core';
import {Article} from '../shared/article';

import {ArticleService} from '../shared/article.service';
import {UserService} from '../shared/user.service';
import {Router} from '@angular/router';

@Component({
    selector: 'asidenews',
    templateUrl: './app/asideNews/asideNews.component.html'
})

export class AsideNewsComponent {

    @Input() article:Article;
    articles;

    constructor(private route:Router, private articleService:ArticleService, private userService:UserService) {
        this.articles = [];
    };

    ngOnInit() {
        this.articleService.getArticles().subscribe(articles => {
            this.articles = articles;
        });
    }
}
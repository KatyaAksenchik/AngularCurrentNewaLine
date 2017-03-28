import {Component, OnInit} from '@angular/core';

import {ArticleService} from '../shared/article.service';
import {UserService} from '../shared/user.service';
import {Router} from '@angular/router';
import {tags} from '../shared/extra.data'


@Component({
    selector: 'mainPage',
    templateUrl: './app/mainPage/mainPage.component.html'
})

export class MainPageComponent implements OnInit {

    articles;
    tags = tags;
    choosedTag = {name: "Все статьи", tag: "all"};
    unsortArticles;

    constructor(private route:Router, private articleService:ArticleService, private userService:UserService) {
        this.articles = [];
    };

    ngOnInit() {
        this.articleService.getArticles().subscribe(articles => {
            this.articles = articles;
            this.unsortArticles = articles;
        });
    }

    onChangeTag() {
        if( this.choosedTag.tag == "all"){
            this.articles = this.unsortArticles;
        } else {
            this.articles = this.unsortArticles.filter((obj) => {
                return this.choosedTag.tag == obj.tag.tag
            }) 
        };
    }

}

import {Component, OnInit} from '@angular/core';

import {Article} from '../shared/article';
import { ArticleService } from '../shared/article.service';
import { Router } from '@angular/router';


@Component({
    selector: 'mainPage',
    templateUrl: './app/mainPage/mainPage.component.html'
})

export class MainPageComponent implements OnInit{
   
    articles;
    
    constructor(private route: Router, private articleService: ArticleService){
        this.articles = [];
    };

    ngOnInit(){
        this.articles = this.articleService.articles;
    }
}
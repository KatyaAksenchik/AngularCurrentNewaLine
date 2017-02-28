import {Component, OnInit} from '@angular/core';

import {Article} from '../shared/article';
import { ArticleService } from '../shared/article.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';


@Component({
    selector: 'newsPage',
    templateUrl: './app/newsPage/newsPage.component.html'
})

export class NewsPageComponent implements OnInit{
    private articles;
    private currentArticles;
    private id: number;

    constructor(private route: ActivatedRoute,private router: Router, private articleService: ArticleService){
        this.articles = [];
    };

    ngOnInit(){
        this.articles=this.articleService.articles;
        this.route.params.subscribe(params => {
            this.id = +params['id'];
        });
        this.currentArticles=this.articleService.findArticle(this.id);
    }
    
    deleteArticle(){
        this.router.navigate(['/mainPage']);
        this.articleService.deleteArticle(this.currentArticles);
    }
    
}
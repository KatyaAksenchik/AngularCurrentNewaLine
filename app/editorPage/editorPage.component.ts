import {Component, OnInit} from '@angular/core';

import {Article} from '../shared/article';
import { ArticleService } from '../shared/article.service';
import { Router } from '@angular/router';


@Component({
    selector: 'editorPage',
    templateUrl: './app/editorPage/editorPage.component.html'
})


export class EditorPageComponent implements OnInit{

    articles;
    len;
    selector={
        model: ""
    };
    currentArticle = new Article(null, "", "", "", "");

    constructor(private router: Router, private articleService: ArticleService){
        this.articles = [];
    };

    ngOnInit(){
        this.articles=this.articleService.articles;
        this.len=this.articleService.articles.length-1;
        this.currentArticle.id=this.articles[this.len].id+1;
    }

    delete(article) {
        this.articleService.deleteArticle(article);
    }
    publishArticle(article){
        this.articleService.publishArticle(article);
    }

    addArticle(currentArticle){
        this.articleService.addArticle(currentArticle);
    }
    
    edit(article){
        this.currentArticle = this.articleService.editArticle(article, this.currentArticle);
        this.articleService.deleteArticle(article);
    }

    direct(article){
        this.router.navigate(['/newsPage', article.id]);
    }

    select(){
        console.log(this.selector);
    }

}

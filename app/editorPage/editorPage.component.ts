import {Component, OnInit} from '@angular/core';

import {Article} from '../shared/article';
import { ArticleService } from '../shared/article.service';

@Component({
    selector: 'editorPage',
    templateUrl: './app/editorPage/editorPage.component.html'
})


export class EditorPageComponent implements OnInit{

    articles;
    currentArticle = new Article(1, "", "", "", "");

    constructor(private articleService: ArticleService){
        this.articles = [];
    };

    ngOnInit(){
        this.articles=this.articleService.articles;
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
    
    edit(article, currentArticle){
        currentArticle = this.articleService.editArticle(article, currentArticle);
    }

}

import {Component, OnInit} from '@angular/core';

import {Article} from '../shared/article';
import { ArticleService } from '../shared/article.service';
import { UserService } from '../shared/user.service';
import { tags } from '../shared/data';
import { Router } from '@angular/router';


@Component({
    selector: 'editorPage',
    templateUrl: './app/editorPage/editorPage.component.html'
})


export class EditorPageComponent implements OnInit{

    articles;
    len;
    activeUser;
    currentArticle;
    tags=tags;
    
    constructor(private router: Router, private articleService: ArticleService, private  userService: UserService){
        this.articles = [];
    };

    ngOnInit(){
        this.buildComponent()
    }

    buildComponent(){
        this.activeUser=this.userService.checkActiveUser();
        this.articles=this.articleService.getUserArticles(this.activeUser.login);
        this.currentArticle= new Article(null, "", "", "", "", "", this.activeUser.login);
    }


    delete(article) {
        this.articleService.deleteArticle(article);
    }
    publishArticle(article){
        this.articleService.publishArticle(article);
    }

    addArticle(currentArticle){
        console.log("currentArticle");
        console.log(currentArticle);
        this.articleService.addArticle(currentArticle);
        this.buildComponent();
    }
    
    edit(article){
        this.currentArticle = this.articleService.editArticle(article, this.currentArticle);
        this.articleService.deleteArticle(article);
    }

    direct(article){
        this.router.navigate(['/newsPage', article.id]);
    }

}

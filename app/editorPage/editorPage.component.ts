import {Component, OnInit} from '@angular/core';

import {Article} from '../shared/article';
import {ArticleService} from '../shared/article.service';
import {UserService} from '../shared/user.service';
import {tags} from '../shared/data';
import {Router} from '@angular/router';
import {ActivatedRoute} from '@angular/router';

@Component({
    selector: 'editorPage',
    templateUrl: './app/editorPage/editorPage.component.html'
})


export class EditorPageComponent implements OnInit {

    articles;
    activeUser;
    currentArticle;
    tags = tags;
    id:number;
    editState:string;


    constructor(private route:ActivatedRoute, private router:Router, private articleService:ArticleService, private  userService:UserService) {
        this.articles = [];
    };

    ngOnInit() {
        this.buildComponent()

        this.route.params.subscribe(params => {
            this.id = +params['id'];
        });
        if (isNaN(this.id) == false) {
            if (this.id !== 0) {
                this.editState = "Редактирование новости";
                this.currentArticle = this.articleService.findArticle(this.id);
                this.articleService.deleteArticle(this.currentArticle);
            }
            else {
                this.currentArticle = this.articleService.getTemporaryArticle();
            }
        }
    }

    buildComponent() {
        this.editState = "Создание новости";
        this.activeUser = this.userService.checkActiveUser();
        this.articles = this.articleService.getArticles();
        this.currentArticle = new Article(null, "", "", "", "", "", this.activeUser.userName, "" + (new Date()), this.activeUser.login);
    }


    delete(article) {
        this.articleService.deleteArticle(article);
    }

    changePublishState(article) {
        this.articleService.publishArticle(article);
    }

    addArticle(currentArticle) {
        this.articleService.addArticle(currentArticle);
        this.buildComponent();
    }

    edit(article) {
        this.editState = "Редактирование новости";
        this.currentArticle = this.articleService.editArticle(article, this.currentArticle);
        this.articleService.deleteArticle(article);
    }

    direct(article) {
        this.router.navigate(['/newsPage', article.id]);
    }

    publishArticle(currentArticle) {
        currentArticle.published = true;
        this.addArticle(currentArticle);
    }

    previewPage(currentArticle) {
        this.articleService.setTemporaryArticle(currentArticle);
        this.router.navigate(['/newsPage', 0]);
    }

}

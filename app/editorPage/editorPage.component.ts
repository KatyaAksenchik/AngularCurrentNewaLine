import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Router} from '@angular/router';

import {ArticleService} from '../shared/article.service';
import {UserService} from '../shared/user.service';

import {Article} from '../shared/article';
import {tags} from '../shared/extra.data'

@Component({
    selector: 'editorPage',
    templateUrl: './app/editorPage/editorPage.component.html'
})


export class EditorPageComponent implements OnInit {
    articles:[];
    currentArticle;
    tags = tags;
    activeUser;
    editState:string;
    id:number;

    constructor(private route:ActivatedRoute, private router:Router, private articleService:ArticleService, private  userService:UserService) {
        this.articles = [];
    };

    ngOnInit() {
        this.buildComponent();

        this.route.params
            .map(params => params['id'])
            .switchMap(id => {
                if (isNaN(id) == false) {
                    if (id !== "0") {
                        this.editState = "Редактирование новости";
                        return this.articleService.getArticle(id);
                    }
                    else {
                        return Observable.of(this.articleService.getTemporaryArticle());
                    }
                } else {
                    return Observable.of(this.currentArticle);
                }
            })
            .subscribe(article => {
                this.currentArticle = article;
                this.articleService.deleteArticle(this.currentArticle);
            });
    }

    buildComponent() {
        this.editState = "Создание новости";
        this.activeUser = this.userService.checkActiveUser()[0];
        this.articleService.getArticles().subscribe(articles => this.articles = articles);
        this.currentArticle = new Article(null, "", "", "", "", "",
            this.activeUser.userName, "" + (new Date()), this.activeUser.login);
    }

    add(currentArticle) {
        this.articleService.addArticle(currentArticle).subscribe(newArticle => this.articles.push(newArticle));
        this.buildComponent();
    }

    addArticle(currentArticle) {
        currentArticle.published = false;
        this.add(currentArticle);
    }

    publishArticle(currentArticle) {
        currentArticle.published = true;
        // this.addArticle(currentArticle);
        this.add(currentArticle);
    }

    delete(article) {
        this.articleService.deleteArticle(article).subscribe(res => {
            let index = this.articles.indexOf(article);
            if (index > -1) {
                this.articles.splice(index, 1);
            }
        });
    }

    changePublishState(article) {
        article.published = !article.published;
        article.publishDate = "" + (new Date());

        this.articleService.updateArticle(article).subscribe();
    }

    edit(article) {
        this.editState = "Редактирование новости";
        this.currentArticle = {
            id: article.id,
            articleName: article.articleName,
            imgUrl: article.imgUrl,
            tag: article.tag,
            previewText: article.previewText,
            articleText: article.articleText,
            authorName: article.authorName,
            publishDate: article.publishDate,
            authorLogin: article.authorLogin,
            published: article.published
        };
        this.delete(article);
    }

    direct(article) {
        this.router.navigate(['/newsPage', article.id]);
    }

    previewPage(currentArticle) {
        this.articleService.setTemporaryArticle(currentArticle);
        this.router.navigate(['/newsPage', 0]);
    }

    onChange(val) {
        this.currentArticle.tag = JSON.parse(val);
        this.selectedDevice = JSON.parse(val);
    }

}
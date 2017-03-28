import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/observable/of'

import {Component, OnInit}      from '@angular/core';
import {ActivatedRoute} from '@angular/router';

import {Article} from '../shared/article';
import {ArticleService} from '../shared/article.service';
import {UserService} from '../shared/user.service';
import {Router} from '@angular/router';

@Component({
    selector: 'newsPage',
    templateUrl: './app/newsPage/newsPage.component.html'
})

export class NewsPageComponent implements OnInit {
    article;
    hiddenButton:boolean;
    id:number;

    constructor(private articleService:ArticleService,
                private userService:UserService,
                private route:ActivatedRoute,
                private router:Router) {
    }

    ngOnInit():void {
        this.article = new Article(null, "", "", "", "", "", "", "", "");

        this.route.params
            .map(params => params['id'])
            .switchMap(id => {
                this.id = id;
                if (isFinite(id)) {
                    return this.articleService.getArticle(id);
                } else {
                    return Observable.of(this.articleService.getTemporaryArticle(id.match(/\d+$/)[0]));
                }
            })
            .subscribe(article => {
                this.article = article;
                this.hiddenButton = this.userService.displayEditButtons(article);
            });
    }

    deleteArticle(article) {
        this.router.navigate(['/mainPage']);
        if (isFinite(id)) {
            this.articleService.deleteArticle(article).subscribe(res => {
                article = null;
            });
        } else {
            this.articleService.clearTemporaryArticle();
        }

    }

    directToEdit() {
        let id;
        if (isFinite(id)) {
            id = this.article.id;
        } else {
            id = this.id;
        }
        this.router.navigate(['/editorPage', id]);
    }

}

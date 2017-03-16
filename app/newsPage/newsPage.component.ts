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
        this.article = new Article(null, "", "", "", "", "","", "", "");

        this.route.params
            .map(params => params['id'])
            .switchMap(id => {
                this.id = id;
                if (id !== "0") {
                    return this.articleService.getArticle(id);
                } else {
                    return Observable.of(this.articleService.getTemporaryArticle());
                }
            })
            .subscribe(article => {
                this.article = article;
                this.hiddenButton = this.userService.displayEditButtons(article);
            });
    }

    deleteArticle(article) {
        this.router.navigate(['/mainPage']);
        if(this.id!=="0"){
            this.articleService.deleteArticle(article).subscribe(res => {
                article = null;
            });
        } else {
            this.articleService.clearTemporaryArticle();
        }
        
    }

    directToEdit() {
        this.router.navigate(['/editorPage', this.article.id]);
    }

}

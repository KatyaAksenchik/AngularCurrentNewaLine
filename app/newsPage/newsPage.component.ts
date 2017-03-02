import {Component, OnInit} from '@angular/core';

import {Article} from '../shared/article';
import { ArticleService } from '../shared/article.service';
import { UserService } from '../shared/user.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';


@Component({
    selector: 'newsPage',
    templateUrl: './app/newsPage/newsPage.component.html'
})

export class NewsPageComponent implements OnInit{
    private currentArticles;
    private id: number;

    model:boolean;

    constructor(private route: ActivatedRoute,private router: Router, private articleService: ArticleService, private userService: UserService){
        // this.articles = [];
    };

    ngOnInit(){
        this.route.params.subscribe(params => {
            this.id = +params['id'];
        });

        
        if(this.id==0){
            this.currentArticles=this.articleService.getTemporaryArticle();
        } else{
            this.currentArticles=this.articleService.findArticle(this.id);
        }
        this.model=this.userService.displayEditButtons(this.currentArticles);
    }
    
    deleteArticle(){
        this.router.navigate(['/mainPage']);
        if(this.id!==0){
            this.articleService.deleteArticle(this.currentArticles);
        } {
            this.articleService.clearTemporaryArticle();
            this.router.navigate(['/editorPage']);
        }
    }

    directToEdit(){
        this.router.navigate(['/editorPage', this.currentArticles.id]);
    }
    
}
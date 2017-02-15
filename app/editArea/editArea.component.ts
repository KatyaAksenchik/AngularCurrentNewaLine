import { Component } from '@angular/core';
import { Article } from '../shared/article';
import  { articles } from '../shared/data'

@Component({
    selector: 'editArea',
    templateUrl: './app/editArea/editArea.component.html'
})

export class EditAreaComponent{
    
    articles = articles;
    newArticle: Article = new Article(" ", " ", " ", " ");
    
    addArticle( imgUrl: string, articleText: string){
        let article: Article = new Article(this.newArticle.articleName, imgUrl, articleText, "Katya");
        this.articles.push(article);
    }
}
    

import { Component } from '@angular/core';
import { Article } from '../shared/article';
import  { articles } from '../shared/data'


@Component({
    selector: 'editPrvArea',
    templateUrl: './app/editPrvArea/editPrvArea.component.html'
})

export class EditPrvAreaComponent{
    articles= articles;

    deleteArticle(article: Article) {
        let index = this.articles.indexOf(article);
        if (index > -1) {
            this.articles.splice(index, 1);
        }

    }
    publishArticle(article: Article){
        article.published = true;
    }
}

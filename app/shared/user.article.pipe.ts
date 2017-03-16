import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name: "userArticle",
    pure: false
})

export class UserArticlePipe implements PipeTransform {
    transform(articles, login){
        return articles.filter(article => article.authorLogin == login);
    }
}
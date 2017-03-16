import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name: "published"
})

export class PublishedPipe implements PipeTransform {
    transform(articles) {
        return articles.filter(article => article.published == true);
    }
}
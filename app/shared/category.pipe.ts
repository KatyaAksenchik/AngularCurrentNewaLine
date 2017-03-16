import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name: "category",
    pure: false
})

export class CategoryPipe implements PipeTransform {
    transform(articles, category) {
        return articles.filter(article => article.tag.tag == category);
    }
}
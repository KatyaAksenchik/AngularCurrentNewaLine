import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name: "notcategory",
    pure: false
})

export class NotCategoryPipe implements PipeTransform {
    transform(articles, category) {
        return articles.filter(article => article.tag.tag !== category);
    }
}
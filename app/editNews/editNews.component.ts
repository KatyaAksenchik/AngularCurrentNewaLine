import { Component, Input, Output, EventEmitter} from '@angular/core';
import { Article } from '../shared/article';
 
@Component({
    selector: 'editnews',
    templateUrl: './app/editNews/editNews.component.html'
})

export class EditNewsComponent {
    @Input() article:Article;
    @Input() currentArticle:Article;

    @Output() delete = new EventEmitter();
    @Output() publishArticle = new EventEmitter();
    @Output() edit = new EventEmitter();


    onPublishArticle() {
        this.publishArticle.emit(this.article);
    }

    onDelete() {
        this.delete.emit(this.article);
    }

    onEditArticle(){
        this.edit.emit(this.article, this.currentArticle);
    }
}
import {Injectable} from '@angular/core';
import {Http, Headers, RequestOptions} from '@angular/http';

import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

import  {Article} from './article';

@Injectable()
export class ArticleService {

    private apiUrl = 'api/articles';
    id = 8;

    constructor(private http:Http) {
    }

    getArticles() {
        return this.http.get(this.apiUrl)
            .map(res => res.json().data)
            .catch(this.handleError)
    }

    getArticle(id) {
        const url = `${this.apiUrl}/${id}`;
        return this.http.get(url)
            .map(res => res.json().data)
            .catch(this.handleError)
    }

    addArticle(article) {

        let headers = new Headers({'Content-Type': 'aplication/json'});
        let options = new RequestOptions({headers});

        let newArticle = new Article(this.id, article.articleName, article.imgUrl,
            article.tag, article.previewText, article.articleText, article.authorName,
            article.publishDate, article.authorLogin, article.published
        );
        this.id++;
        return this.http.post(this.apiUrl, newArticle, options)
            .map(res => res.json().data)
            .catch(this.handleError)


    }

    deleteArticle(article) {
        let headers = new Headers({'Content-Type': 'aplication/json'});
        let options = new RequestOptions({headers});
        let url = `${this.apiUrl}/${article.id}`;

        return this.http.delete(url, options)
            .catch(this.handleError);
    }

    updateArticle(article) {

        let headers = new Headers({'Content-Type': 'aplication/json'});
        let options = new RequestOptions({headers});
        let url = `${this.apiUrl}/${article.id}`;

        return this.http.put(url, article, options)
            .catch(this.handleError)
    }

    private handleError(error) {
        console.error('Ошибка', error);
        return Observable.throw(error.message || error)
    }

    setTemporaryArticle(currentArticle) {
        currentArticle.id = 0;
        localStorage.setItem('PreviewPage', JSON.stringify(currentArticle));
    }

    getTemporaryArticle() {
        return JSON.parse(localStorage.getItem('PreviewPage'));
    }

    clearTemporaryArticle() {
        localStorage.setItem('PreviewPage', JSON.stringify({}));
    }
}


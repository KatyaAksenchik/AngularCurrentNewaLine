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
    id = 5;

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


// // import  {articles} from './data';
// import {Injectable} from '@angular/core';
// import  {Article} from './article';
// import {Http, Headers, RequestOptions} from '@angular/http'
// // import { Observable } from 'rxjs/Observable';
// import 'rxjs/add/operator/toPromise';
// // import 'rxjs/add/operator/map';
// // import 'rxjs/add/operator/catch';
// // import 'rxjs/add/observable/throw';
//
//
// @Injectable()
// export class ArticleService {
//    
//    
//     private apiUrl = 'api/articles';
//
//     // articles = [];
//     // id = articles[articles.length - 1].id + 1;
//
//     constructor(private http:Http) {}
//
//     // getArticles() {
//     //     // return this.articles;
//     //     return this.http.get(this.apiUrl)
//     //         .map(res => res.json().data)
//     //         .catch(this.handleError)
//     // }
//
//     getArticles() {
//             // return this.articles;
//             return this.http.get(this.apiUrl)
//                 .toPromise()
//                 .then(res => res.json().data)
//                 .catch(this.handleError)
//     }
//
//     getArticle(id: number){
//         const url = `${this.apiUrl}/${id}`;
//         return this.http.get(url)
//             .toPromise()
//             .then(response => response.json().data)
//             .catch(this.handleError);
//     }
//    
//     private handleError(error: any): Promise<any> {
//         console.error('An error occurred', error);
//         return Promise.reject(error.message || error);
//     }
//     //
//     // setTemporaryArticle(currentArticle) {
//     //     currentArticle.id = 0;
//     //     this.temporaryArticle = currentArticle;
//     // }
//     //
//     // getTemporaryArticle() {
//     //     return this.temporaryArticle;
//     // }
//     //
//     // clearTemporaryArticle() {
//     //     this.temporaryArticle = {};
//     // }
//     //
//     // addArticle(currentArticle) {
//     //
//     //     let headers = new Headers({'Content-Type': 'aplication/json'});
//     //     let options = new RequestOptions({headers});
//     //
//     //     let newArticle = new Article(
//     //         this.id,
//     //         currentArticle.articleName,
//     //         currentArticle.imgUrl,
//     //         currentArticle.tag,
//     //         currentArticle.previewText,
//     //         currentArticle.articleText,
//     //         currentArticle.authorName,
//     //         currentArticle.publishDate,
//     //         currentArticle.authorLogin,
//     //         currentArticle.published
//     //     );
//     //     // this.articles.push(newArticle);
//     //     return this.http.post(this.apiUrl, newArticle, options)
//     //         .map(res => res.json().data)
//     //         .catch(this.handleError)
//     //
//     //     this.id++;
//     //
//     // }
//     //
//     // deleteArticle(article) {
//     //     let headers = new Headers({'Content-Type': 'aplication/json'});
//     //     let options = new RequestOptions({headers});
//     //     let url = `${this.apiUrl}/${article.id}`;
//     //
//     //
//     //     return this.http.delete(url, options)
//     //         .catch(this.handleError);
//     // }
//     //
//     // editArticle(article:Article, currentArticle) {
//     //     return currentArticle = {
//     //         id: article.id,
//     //         articleName: article.articleName,
//     //         imgUrl: article.imgUrl,
//     //         tag: article.tag,
//     //         previewText: article.previewText,
//     //         articleText: article.articleText,
//     //         authorName: article.authorName,
//     //         publishDate: article.publishDate,
//     //         authorLogin: article.authorLogin,
//     //         published: article.published
//     //     }
//     // }
//     //
//     // publishArticle(article:Article) {
//     //     // article.published = !article.published;
//     //     // article.publishDate = ""+(new Date());
//     //     let headers = new Headers({'Content-Type': 'aplication/json'});
//     //     let options = new RequestOptions({headers});
//     //     let url = `${this.apiUrl}/${article.id}`;
//     //
//     //     return this.http.put(url, article, options)
//     //         .catch(this.handleError)
//     // }
//     //
//     // // findArticle(id) {
//     // //     // for(let i=0; i<this.articles.length; i++){
//     // //     //     if(this.articles[i].id==id){
//     // //     //         return this.articles[i];
//     // //     //     }
//     // //     // }
//     // //     let url = `${this.apiUrl}/${id}`;
//     // //     return this.http.get(url)
//     // //         .map(res => res.json().data)
//     // //         .catch(this.handleError)
//     // // }
//     //
//     //
//     //
//     //
//     // findArticle() {
//     //     let url = `${this.apiUrl}/${id}`;
//     //     return this.http.get(url)
//     //         .toPromise()
//     //         .then(response => response.json().data)
//     //         .catch(this.handleError);
//     // }
//     //
//     //
//     // // private handleError(error) {
//     // //     console.error('Ошибка', error);
//     // //     return Observable.throw(error.message || error)
//     // // }
//
// }

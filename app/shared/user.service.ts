import {Injectable} from '@angular/core';
import {Http, Headers, RequestOptions, URLSearchParams} from '@angular/http';
import {Subject}    from 'rxjs/Subject';

import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

import  {User} from './user';


@Injectable()
export class UserService {

    private apiUrl = 'api/users';
    activeUser = {};


    constructor(private http:Http) {
    }

    getUsers() {
        return this.http.get(this.apiUrl)
            .map(res => res.json().data)
            .catch(this.handleError)
    }

    getUser(param) {
        let params:URLSearchParams = new URLSearchParams();

        for (var key in param) {
            if (param.hasOwnProperty(key)) {
                let val = param[key];
                params.set(key, val);
            }
        }
        let headers = new Headers({'Content-Type': 'aplication/json'});
        let options = new RequestOptions({headers, search: params});

        return this.http
            .get(this.apiUrl, options)
            .map(res => res.json().data)
            .catch(this.handleError)
    }

    addUser(user) {

        let headers = new Headers({'Content-Type': 'aplication/json'});
        let options = new RequestOptions({headers});

        let newUser:User = new User(user.login, user.password, user.email,
            user.userName, user.birthday, user.phoneNumber);

        return this.http.post(this.apiUrl, newUser, options)
            .map(res => res.json().data)
            .catch(this.handleError)
    }

    private handleError(error) {
        console.error('Ошибка', error);
        return Observable.throw(error.message || error)
    }

    setActiveUser(user) {
        localStorage.setItem('ActiveUser', JSON.stringify(user));
    }

    checkActiveUser() {
        return JSON.parse(localStorage.getItem('ActiveUser'))
    }

    clearStorage() {
        localStorage.setItem('ActiveUser', JSON.stringify([{login: ""}]));
    }


    displayEditButtons(currentArticle) {
        let user = this.checkActiveUser()[0];
        // if (user.login == "") {
        //     return false;
        // } else if (user.login == currentArticle.authorLogin) {
        //     return true;
        // } else return false;
        //
        
        return user.login == currentArticle.authorLogin;
    }

    private emitLoginChange = new Subject();
    emitLoginChange$ = this.emitLoginChange.asObservable();

    emitChange() {
        this.emitLoginChange.next();
    }

}


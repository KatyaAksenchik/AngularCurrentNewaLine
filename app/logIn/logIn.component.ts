import {Component, OnInit} from '@angular/core';

import { Router } from '@angular/router';
import { users } from '../shared/data';
import { User } from '../shared/user';


@Component({
    selector: 'logIn',
    templateUrl: './app/logIn/logIn.component.html'
})

export class LogInComponent {
    // activeUser=false;
    model={
        userName: "Войти",
        login: "",
        password: "",
        formTrue: true, 
        showAddition: false,
        showForm: false
    }

    users=users;

    openForm(){
       this.model.showForm=!this.model.showForm;
    }

    constructor(private router: Router){ };
    onSubmit(){
        this.model.formTrue=false;
        for(let i=0; i<users.length; i++){
            if(this.model.login==users[i].login && this.model.password==users[i].password){
                alert("Вы зарегистрировались");
                this.model={
                    userName: this.model.login,
                    login: "",
                    password: "",
                    formTrue: true,
                    showAddition: true,
                    showForm: false,
                }
            }
        }
    }
    
    
}

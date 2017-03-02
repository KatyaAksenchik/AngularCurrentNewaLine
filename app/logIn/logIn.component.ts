import {Component, OnInit} from '@angular/core';

import { Router } from '@angular/router';
// import { users } from '../shared/data';
// import { User } from '../shared/user';

import { UserService } from '../shared/user.service';


@Component({
    selector: 'logIn',
    templateUrl: './app/logIn/logIn.component.html'
})

export class LogInComponent implements OnInit{

    showError;
    model={
        userName: "",
        formValid: true,
        showAddition: false,
        showForm: false
    };

    userModel = {
        login: "",
        password: ""
    };

    constructor(private router: Router, private userService: UserService){
    };

    ngOnInit(){
        if(this.userService.checkActiveUser().login!==""){
            this.model.userName=this.userService.checkActiveUser().login;
            this.model.showAddition=true;
        } else{
            this.model.userName="Войти";
        }
    }

    openForm(){
       this.model.showForm=!this.model.showForm;
    }

    onSubmit(){
        let validationResult=this.userService.checkIfUserExist(this.userModel);
        
        if (validationResult.userExist){
            this.model={
                userName: this.userModel.login,
                formValid: true,
                showForm: false,
                showAddition: true
            }
            
            this.userService.setActiveUser(validationResult.userInfo);
            
            this.userModel={
                login: "",
                password: ""
            }
            
            
        } else{
            this.model={
                userName: "Войти",
                formValid: false,
                showAddition: false,
                showForm: true
            }
        }

    }

    logOut(){
        this.userService.clearStorage();
        this.model={
            userName: "Войти",
            formValid: false,
            showAddition: false,
            showForm: true
        };
        this.router.navigate(['/mainPage']);
    }

    
}

import {Component, OnInit, bind} from '@angular/core';

import {Router} from '@angular/router';
import {UserService} from '../shared/user.service';
import 'rxjs/Rx';


@Component({
    selector: 'logIn',
    templateUrl: './app/logIn/logIn.component.html'
})

export class LogInComponent implements OnInit {

    showError: boolean = false;
    model = {
        userName: "",
        formValid: true,
        showAddition: false,
        showForm: false
    };

    entranceModel = {
        userName: "Войти",
        formValid: false,
        showAddition: false,
        showForm: true
    };

    userModel = {
        login: "",
        password: ""
    };


    constructor(private router:Router, private userService:UserService) {
        this.userService.emitLoginChange$.subscribe(
            res => {
                this.buildLogIn();
            });
    };

    ngOnInit() {
        this.buildLogIn();
    }

    buildLogIn() {
        if (this.userService.checkActiveUser()[0].login !== "") {
            this.model.userName = this.userService.checkActiveUser()[0].login;
            this.model.showAddition = true;
        } else {
            this.model.userName = "Войти";
        }
    }

    openForm() {
        this.model.showForm = !this.model.showForm;
    }

    toRegistrationPage() {
        this.model.showForm = false;
        this.router.navigate(['/registration']);
    }

    hidemsg(){
        this.showError = false;
    }

    onSubmit() {
        this.userService.getUser(this.userModel).subscribe(
            res => {
                if (res.length > 0) {
                    this.model = {
                        userName: this.userModel.login,
                        formValid: true,
                        showForm: false,
                        showAddition: true
                    };

                    this.userService.setActiveUser(res);

                    this.userModel = {
                        login: "",
                        password: ""
                    }
                } else {
                    this.model = this.entranceModel;
                    this.showError = true;
                }
            });
    }

    logOut() {
        this.userService.clearStorage();
        this.model = {
            userName: "Войти",
            formValid: false,
            showAddition: false,
            showForm: true
        };
        this.router.navigate(['/mainPage']);
    }
}

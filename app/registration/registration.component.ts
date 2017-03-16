import {Component, OnInit, Injectable} from '@angular/core';
import {FormBuilder, FormGroup, Validators, FormControl} from '@angular/forms';

import {User} from '../shared/user';
import {UserService} from '../shared/user.service';
import {Router} from '@angular/router';


@Component({
    selector: 'registration',
    templateUrl: './app/registration/registration.component.html'
})

export class RegistrationComponent implements OnInit {

    users;
    existed:boolean;
    newUser:User = new User("", "", "", "");
    name: any;

    registrationForm:FormGroup;

    constructor(private router:Router, private userService:UserService, private formBuilder:FormBuilder) {
        this.users = [];
    };

    ngOnInit() {
        this.buildForm();
        this.userService.getUsers().subscribe(users => {
            this.users = users;
        });
    }


    buildForm(){
        let emailRegex = '^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$';
        this.registrationForm = this.formBuilder.group({
            // "login": [this.newUser.login, Validators.required, this.checkLogin(this.registrationForm)],
            "login": [this.newUser.login, Validators.required],
            "password": [this.newUser.password, [Validators.required, Validators.minLength(3)]
            ],
            "email": [this.newUser.email, [Validators.required, Validators.pattern(emailRegex)]
            ],
            "userName": [this.newUser.userName, Validators.required],
            "birthday": [this.newUser.birthday],
            "phoneNumber": [this.newUser.phoneNumber]
        });

        this.registrationForm.valueChanges
            .subscribe(data => this.onValueChanged(data));

        this.onValueChanged();
    }

    checkLogin() {
        for (let i = 0; i < this.users.length; i++) {
            if (this.users[i].login == this.registrationForm.value.login) {
                this.existed = true;
                this.registrationForm.controls.login._status = "INVALID";
                break;
            } else {
                this.existed = false;
            }
        }
    }

    onValueChanged(data?:any) {
        if (!this.registrationForm) {
            return;
        }
        const form = this.registrationForm;
        for (const field in this.formErrors) {

            this.formErrors[field] = '';
            const control = form.get(field);
            if (control && control.dirty && !control.valid) {
                const messages = this.validationMessages[field];
                for (const key in control.errors) {
                    this.formErrors[field] += messages[key] + ' ';
                }
            }
        }
    }

    formErrors = {
        'login': '',
        'password': '',
        'email': '',
        'userName': '',
    };

    validationMessages = {
        'login': {
            'required': 'Данное поле обязательно для заполнения',
            'notExistedLogin': 'Такой логин уже существует'
        },
        'password': {
            'required': 'Пароль обязателен для заполнения',
            'minlength': 'Пароль должен быть длинее 3-х символов'
        },
        'email': {
            'required': 'Email обязателен для заполнения',
            'pattern': 'Email должен подходить под маску example@example.com'
        },
        'userName': {
            'required': 'Данное поле обязательно для заполнения'
        }
    };

    onSubmit() {
        this.userService.addUser(this.registrationForm.value).subscribe(newArticle => this.users.push(newArticle));
        this.userService.setActiveUser([this.registrationForm.value]);
        this.userService.emitChange();
        this.buildForm();
        this.router.navigate(['/mainPage']);
    }

}
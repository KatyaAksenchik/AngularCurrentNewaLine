import { Component, AfterViewChecked, ViewChild, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FormBuilder, FormGroup, Validators, FormControl} from '@angular/forms';


import { User } from '../shared/user';
import  { users } from '../shared/data'

@Component({
    // moduleId: module.id,
    selector: 'registration',
    templateUrl: './app/registration/registration.component.html'
})

export class RegistrationComponent implements OnInit{
    users = users;
//     index=0;
//     newUser: User = new User("", "", "");
//
//
//     checkLogin(){
//         for (let i=0; i<users.length; i++ ){
//             console.log("user "+users[i].login);
//             if(users[i].login==this.newUser.login){
//                 return false;
//             } else return true;
//
//         }
//     }
//     onSubmit(){
//         let user: User= new User(this.newUser.login , this.newUser.password, this.newUser.email,
//                 this.newUser.userName, this.newUser.birthday, this.newUser.phoneNumber);
//
//         this.users.push(user);
//
//         this.newUser={
//             login: "",
//             password: "",
//             email: "",
//             userName: "",
//             birthday: "",
//             phoneNumber: null
//         };
//         alert("form is submitted");
//     }
//
//     registrationForm: NgForm;
//     @ViewChild('registrationForm') currentForm: NgForm;
//
//     ngAfterViewChecked() {
//         this.formChanged();
//     }
//
//     formChanged() {
//         if (this.currentForm === this.registrationForm) { return; }
//         this.registrationForm = this.currentForm;
//         if (this.registrationForm) {
//             this.registrationForm.valueChanges
//                 .subscribe(data => this.onValueChanged(data));
//         }
//     }
//     onValueChanged(data?: any) {
//         if (!this.registrationForm) { return; }
//         const form = this.registrationForm.form;
//
//         for (const field in this.formErrors) {
//             this.formErrors[field] = '';
//             const control = form.get(field);
//
//             if (control && control.dirty && !control.valid) {
//                 const messages = this.validationMessages[field];
//                 for (const key in control.errors) {
//                     this.formErrors[field] += messages[key] + ' ';
//                 }
//             }
//         }
//     }
//
//     formErrors = {
//         'login': '',
//         'password': '',
//         'email': ''
//     };
//
//     validationMessages = {
//         'login': {
//             'required':      'Данное поле обязательно для заполнения'
//         },
//         'password': {
//             'required': 'Пароль обязателен для заполнения',
//             'minlength': 'Пароль должен быть длинее 3-х символов'
//         },
//         'email': {
//             'required': 'Email обязателен для заполнения'
//         }
//
//     };
//
//
// }

// implements OnInit
// export class RegistrationComponent implements OnInit {
//     users = users;

    // checkLogin(fieldControl: FormControl){
    //     for (let i=0; i<users.length; i++ ){
    //         if (users[i].login==fieldControl.value[0])
    //             return null;
    //         else return { notExistedLogin: true };
    //     }
    // }
    //
    // registrationForm: FormGroup;
    // constructor (private formBuilder: FormBuilder) {}
    //
    // ngOnInit(){
    //     this.registrationForm=this.formBuilder.group({
    //         login: ['', Validators.required, this.checkLogin ],
    //         password: ['', Validators.required, Validators.minLength(3)],
    //         email: ['', Validators.required, Validators.pattern('^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$')],
    //         userName: [],
    //         birthday: [],
    //         phoneNumber: [null, Validators.pattern('^(\d{9})$')]
    //     })
    // };
// ---------------------------------------------
//     registrationForm: FormGroup;
//     constructor(){
//         this.registrationForm=new FormGroup({
//             login: new FormControl('', [Validators.required, this.checkLogin]),
//             password: new FormControl('',[ Validators.required,
//                                            Validators.minLength(3)]
//             ),
//             email: new FormControl('', [ Validators.required,
//                                          Validators.pattern("^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$")]
//             ),
//             userName: new FormControl(""),
//             birthday: new FormControl(""),
//             phoneNumber: new FormControl(null, Validators.pattern('^(\d{9})$'))
//         });
//     }
//
//         checkLogin(control: FormControl): {[s:string]:boolean}{
//             for (let i=0; i<users.length; i++ ){
//                 if (users[i].login == control.value[0])
//                     return null;
//                 else return {notExistedLogin: true};
//             }
//     }

    newUser: User = new User("", "", "");

    registrationForm: FormGroup;
    constructor(private formBuilder:FormBuilder) {
    }

    ngOnInit() {
        let emailRegex = '^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$',
            phoneRegex='^(\d{9})$';
        this.registrationForm = this.formBuilder.group({
            "login": [this.newUser.login, [Validators.compose([Validators.required, this.checkLogin])]
            ],
            "password": [this.newUser.password, [Validators.required,
                              Validators.minLength(3)]
            ],
            "email": [this.newUser.email, [Validators.required,
                                           Validators.pattern(emailRegex)]
            ],
            "userName": [this.newUser.userName],
            "birthday": [this.newUser.birthday],
            "phoneNumber": [null, Validators.pattern(phoneRegex)]
        })

        this.registrationForm.valueChanges
            .subscribe(data => this.onValueChanged(data));

        this.onValueChanged();
    };

    onValueChanged(data?: any) {
        if (!this.registrationForm) { return; }
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
        'phoneNumber': ''
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
        'phoneNumber':{
            'pattern': 'Телефон должен подходить под маску (29)121-34-57'
        }

    };

    checkLogin(control:FormControl):{[s:string]:boolean} {

        for (let i = 0; i < users.length; i++) {
            if (users[i].login == control.value)
                return {notExistedLogin: false};
            else null;
        }
    }
    onSubmit(){
        let user: User= new User(this.newUser.login , this.newUser.password, this.newUser.email,
                this.newUser.userName, this.newUser.birthday, this.newUser.phoneNumber);

        this.users.push(user);
        //
        // this.newUser={
        //     login: "",
        //     password: "",
        //     email: "",
        //     userName: "",
        //     birthday: "",
        //     phoneNumber: null
        // };
        alert("form is submitted");
    }

}
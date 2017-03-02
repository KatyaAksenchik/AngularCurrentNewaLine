"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var user_1 = require("../shared/user");
var user_service_1 = require("../shared/user.service");
var router_1 = require("@angular/router");
var RegistrationComponent = (function () {
    function RegistrationComponent(router, userService, formBuilder) {
        this.router = router;
        this.userService = userService;
        this.formBuilder = formBuilder;
        this.newUser = new user_1.User("", "", "");
        this.formErrors = {
            'login': '',
            'password': '',
            'email': '',
            'userName': '',
        };
        this.validationMessages = {
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
        this.users = [];
    }
    ;
    RegistrationComponent.prototype.ngOnInit = function () {
        this.users = this.userService.getUsers();
        this.buildForm();
    };
    RegistrationComponent.prototype.buildForm = function () {
        var _this = this;
        var emailRegex = '^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$';
        this.registrationForm = this.formBuilder.group({
            // "login": [this.newUser.login, Validators.required, this.checkLogin(this.registrationForm)],
            "login": [this.newUser.login, forms_1.Validators.required],
            "password": [this.newUser.password, [forms_1.Validators.required, forms_1.Validators.minLength(3)]
            ],
            "email": [this.newUser.email, [forms_1.Validators.required, forms_1.Validators.pattern(emailRegex)]
            ],
            "userName": [this.newUser.userName, forms_1.Validators.required],
            "birthday": [this.newUser.birthday],
            "phoneNumber": [this.newUser.phoneNumber]
        });
        this.registrationForm.valueChanges
            .subscribe(function (data) { return _this.onValueChanged(data); });
        this.onValueChanged();
    };
    RegistrationComponent.prototype.checkLogin = function () {
        for (var i = 0; i < this.users.length; i++) {
            if (this.users[i].login == this.registrationForm.value.login) {
                this.existed = true;
                this.registrationForm.controls.login._status = "INVALID";
                break;
            }
            else {
                this.existed = false;
            }
        }
        console.log(this.existed);
    };
    RegistrationComponent.prototype.onValueChanged = function (data) {
        if (!this.registrationForm) {
            return;
        }
        var form = this.registrationForm;
        for (var field in this.formErrors) {
            this.formErrors[field] = '';
            var control = form.get(field);
            if (control && control.dirty && !control.valid) {
                var messages = this.validationMessages[field];
                for (var key in control.errors) {
                    this.formErrors[field] += messages[key] + ' ';
                }
            }
        }
    };
    RegistrationComponent.prototype.onSubmit = function () {
        this.userService.addUser(this.registrationForm.value);
        this.buildForm();
        this.router.navigate(['/mainPage']);
    };
    return RegistrationComponent;
}());
RegistrationComponent = __decorate([
    core_1.Component({
        selector: 'registration',
        templateUrl: './app/registration/registration.component.html'
    }),
    __metadata("design:paramtypes", [router_1.Router, user_service_1.UserService, forms_1.FormBuilder])
], RegistrationComponent);
exports.RegistrationComponent = RegistrationComponent;
// checkLogin(fieldControl: FormControl){
// for (let i=0; i<this.users.length; i++ ){
//     if (this.users[i].login==fieldControl.value[0])
//         return null;
//     else return { notExistedLogin: true };
// }
// users = users;
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
//# sourceMappingURL=registration.component.js.map
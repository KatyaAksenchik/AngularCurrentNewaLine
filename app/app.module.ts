import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpModule }    from '@angular/http';
import { ReactiveFormsModule } from '@angular/forms';



import { AppComponent } from './app.component';
import { EditAreaComponent }  from './editArea/editArea.component';
import { EditPrvAreaComponent }  from './editPrvArea/editPrvArea.component';
import { RegistrationComponent }  from './registration/registration.component';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule
    ],
    declarations: [
        AppComponent,
        EditAreaComponent,
        EditPrvAreaComponent,
        RegistrationComponent
    ],
    bootstrap: [AppComponent]
})
export class AppModule{}




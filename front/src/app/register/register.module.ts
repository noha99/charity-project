import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegisterRoutingModule } from './register-routing.module';
import { RegisterComponent } from './register.component';
import {SignupComponent} from "./signup/signup.component";
import {LoginComponent} from "./login/login.component";
import {FormsModule} from "@angular/forms";
import {RouterModule} from "@angular/router";
import {InputTextModule} from "primeng/inputtext";

import {MessagesModule} from 'primeng/messages';
import {MessageModule} from 'primeng/message';


@NgModule({
  declarations: [
    RegisterComponent,
    SignupComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    RegisterRoutingModule,
    FormsModule,
    InputTextModule,
    MessagesModule,
    MessageModule,

  ]
})
export class RegisterModule { }

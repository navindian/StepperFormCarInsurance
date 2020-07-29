import { Overlay, OverlayRef } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { ProgressSpinnerComponent } from '../shared/progress-spinner/progress-spinner.component';
import { LoginService } from './login.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { SocialAuthService, GoogleLoginProvider } from 'angularx-social-login';
import { CookieService } from 'ngx-cookie-service';
import * as CryptoJS from 'crypto-js';
const SECRET_KEY = 'abc123';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(
    private router: Router,
    private loginService: LoginService,
    private fb: FormBuilder,
    private _socialAuthServ: SocialAuthService,
    private cookie: CookieService
  ) {}

  @Output() LoginError = new EventEmitter<any>();
  @Output() LoginSuccess = new EventEmitter<any>();
  @Output() asGuestLogin = new EventEmitter<any>();
  name: string;
  email: string;
  password: string;
  errorMessage: string;
  loginForm: FormGroup;
  user: any;
  hide = true;

  ngOnInit(): void {
    this.cookie.deleteAll();
    this.loginForm = this.fb.group({
      email: ['', [Validators.required]],
      password: ['', [Validators.required]]
    });
  }

  login(): void {
   
    this.errorMessage = null;
    this.loginService
      .getLoginData(
        this.loginForm.value
      )
      .subscribe(
        res => {
          const response = JSON.parse(JSON.stringify(res));
          sessionStorage.setItem('id', response.id);
          // sessionStorage.setItem('token', response.token);
          // this.cookie.HttpOnly(true)
          // this.cookie.set('id',response.id);
          this.cookie.set('token',response.token);
          // response.cookie(response.id, response.token, { httpOnly: false, secure: true});
          // this.cookie.set('isLoggedIn', CryptoJS.AES.encrypt('true', SECRET_KEY).toString());
          sessionStorage.setItem('isLoggedIn', CryptoJS.AES.encrypt('true', SECRET_KEY).toString());
          this.name = prompt('How do you like to call you!!');
          console.log(this.name);
          if (this.name != null) {
            // this.cookie.set('welcomename', this.name);
            sessionStorage.setItem('welcomename', this.name);
          }
          else {
            https://developer.salesforce.com/signup?d=70130000000td6N
            // this.cookie.set('welcomename','');
            sessionStorage.setItem('welcomename', '');
          }
          setTimeout(() => {
            this.router.navigate(['tab']);
          });
        },
      err => {
        this.errorMessage = err.error.error;
        console.log(this.errorMessage);
        alert ('Please enter correct Credentials!');
      }
    );
  }

  redirect(): void {
    this.asGuestLogin.emit('logged in as a guest');
  }
  googleLogin(){
    let platformProvider = GoogleLoginProvider.PROVIDER_ID;
    this._socialAuthServ.signIn(platformProvider).then(response => {
    console.log(platformProvider = 'logged in user data is=', response);
    this.user = response;
    // this.cookie.set('id',response.id);
    this.cookie.set('token',response.authToken);
    sessionStorage.setItem('id', response.id);
    // sessionStorage.setItem('token', response.authToken);
    // response.cookie( response.id, response.authToken, {httpOnly: false, secure: true });
    sessionStorage.setItem('isLoggedIn', CryptoJS.AES.encrypt('true', SECRET_KEY).toString());
    // this.cookie.set('isLoggedIn',CryptoJS.AES.encrypt('true', SECRET_KEY).toString());
    this.name = response.name;
    if (this.name != null) {
      // this.cookie.set('welcomename',this.name);
      // console.log('welcome name',this.cookie.get('welcomename'));
      sessionStorage.setItem('welcomename', this.name);
    }
    else {
      // this.cookie.set('welcomename','');
      sessionStorage.setItem('welcomename', '');
    }
    this.router.navigate(['tab']);});
    }

    // ngOnDestroy(){
    //   this.cookie.delete('id');
    //   this.cookie.delete('token');
    //   this.cookie.delete('welcomename');
    //   this.cookie.delete('isLoggedIn');
    // }
}

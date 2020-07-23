import { Overlay, OverlayRef } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { ProgressSpinnerComponent } from '../shared/progress-spinner/progress-spinner.component';
import { LoginService } from './login.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { SocialAuthService, GoogleLoginProvider } from 'angularx-social-login';
import * as CryptoJS from 'crypto-js';
const SECRET_KEY='abc123';
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
    private overlay: OverlayRef,
    private _socialAuthServ:SocialAuthService
  ) {}

  @Output() LoginError = new EventEmitter<any>();
  @Output() LoginSuccess = new EventEmitter<any>();
  @Output() asGuestLogin = new EventEmitter<any>();
  name: string;
  email: string;
  password: string;
  errorMessage: string;
  loginForm: FormGroup;
  user:any;
  hide = true;

  ngOnInit(): void {
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
          sessionStorage.setItem('token', response.token);
          sessionStorage.setItem('isLoggedIn', CryptoJS.AES.encrypt('true',SECRET_KEY).toString());
          this.name = prompt('How do you like to call you!!');
          console.log(this.name);
          if (this.name != null) {
            sessionStorage.setItem('welcomename', this.name);
          }
          else {
            sessionStorage.setItem('welcomename', '');
          }
          setTimeout(() => {
            this.router.navigate(['tab']);
          });
        },
      err => {
        this.overlay.detach();
        this.errorMessage = err.error.error;
        console.log(this.errorMessage);
        alert("Please enter correct Credentials!")
      }
    );
  }

  redirect(): void {
    this.asGuestLogin.emit('logged in as a guest');
  }
  googleLogin(){
    let platformProvider= GoogleLoginProvider.PROVIDER_ID;
    this._socialAuthServ.signIn(platformProvider).then(response=>{
    console.log(platformProvider= "logged in user data is=",response);
    this.user=response;    
    sessionStorage.setItem('id', response.id);
    sessionStorage.setItem('token', response.authToken);
    sessionStorage.setItem('isLoggedIn', CryptoJS.AES.encrypt('true',SECRET_KEY).toString());
    this.name=response.name;
    if (this.name != null) {
      sessionStorage.setItem('welcomename', this.name);
    }
    else {
      sessionStorage.setItem('welcomename', '');
    }
    this.router.navigate(['tab']);});
    }
}

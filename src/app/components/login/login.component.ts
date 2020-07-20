import { Overlay } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProgressSpinnerComponent } from '../shared/progress-spinner/progress-spinner.component';
import { LoginService } from './login.service';
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
    private overlay: Overlay
  ) {}

  @Output() LoginError = new EventEmitter<any>();
  @Output() LoginSuccess = new EventEmitter<any>();
  @Output() asGuestLogin = new EventEmitter<any>();
  name: string;
  email: string;
  password: string;
  errorMessage: string;
  loginForm: FormGroup;
  hide = true;

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required]],
      password: ['', [Validators.required]]
    });
  }
  login(): void {
    this.errorMessage = null;
    const overlayRef = this.overlay.create({
      positionStrategy: this.overlay.position().global().centerHorizontally().centerVertically(),
      hasBackdrop: true
    });
    overlayRef.attach(new ComponentPortal(ProgressSpinnerComponent))
    this.loginService.getLoginData(this.loginForm.value).subscribe(
      res => {
        overlayRef.detach()
        const response = JSON.parse(JSON.stringify(res));
        sessionStorage.setItem('id', response.id);
        sessionStorage.setItem('token', response.token);
        sessionStorage.setItem('isLoggedIn', 'true');
        this.name = prompt('How do you like to call you!!');
        console.log(this.name);
        if (this.name != null) {
          sessionStorage.setItem('welcomename', this.name);
        } else {
          sessionStorage.setItem('welcomename', '');
        }
        setTimeout(() => {
          this.router.navigate(['tab']);
        });
      },
      err => {
        overlayRef.detach()
        this.errorMessage = err.error.error;
        console.log(this.errorMessage);
        alert("Please enter correct Credentials!")
      }
    );
  }

  redirect(): void {
    this.asGuestLogin.emit('logged in as a guest');
  }
}

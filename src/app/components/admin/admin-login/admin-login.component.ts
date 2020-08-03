import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { AdminLoginService } from './admin-login.service';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css'],
})
export class AdminLoginComponent implements OnInit {
  hide = true;
  loginForm: FormGroup;
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private cookie: CookieService,
    private adminLoginService: AdminLoginService
  ) {}
  errorMessage: string;

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]],
    });
  }
  login(): void {
    if (
      this.loginForm.value.username == 'admin' &&
      this.loginForm.value.password == 'admin'
    ) {
      sessionStorage.setItem('isAdminLogged', 'true');
      this.router.navigate(['admin']);
    } else {
      this.errorMessage = null;
      this.adminLoginService.getLoginData1(this.loginForm.value).subscribe(
        (res) => {
          const response = JSON.parse(JSON.stringify(res));
          sessionStorage.setItem('isAdminLogged', 'true');
          this.cookie.set('token', response.token);
          this.router.navigate(['admin']);
        },
        (err) => {
          this.errorMessage = err.error.error;
          console.log(this.errorMessage);
          alert('Please enter correct Credentials!');
        }
      );
      /* if (this.loginForm.controls['userName'].value === 'admin' && this.loginForm.controls['password'].value === 'admin') {
      sessionStorage.setItem('isAdminLogged', 'true');
      this.cookie.set('token','response token value');
      this.router.navigate(['admin']);
    }
    else {
      alert('Wrong Credentials')
    }*/
    }
  }
}

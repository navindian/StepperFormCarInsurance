import { Component, Input, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators, RequiredValidator } from '@angular/forms';
import { Router } from '@angular/router';
import { SignUpService } from './sign-up.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  @Input() fullName: string;
  @Input() email: string;
  @Input() password: string;
  @Input() confirmPassword: string;
  @Input() mobile: number;
  signUpForm: FormGroup;
  errorMessage: string;
  hide = true;
  hide1 = true;
  constructor(private fb: FormBuilder, private router: Router, private signUpService: SignUpService) { }

  ngOnInit(): void {
    this.signUpForm = this.fb.group({
      // fullName:['',[Validators.required]],
      email: ['', [Validators.required, Validators.pattern(/^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/)]],
      password: ['', [Validators.required]],
      confirmPassword: ['', [Validators.required]],
      mobile: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(10)]]
    }, { validator: this.passwordValidator });
  }

  register = () => {
    console.log(this.signUpForm.value);
    this.signUpService.registerUser(this.signUpForm.value).subscribe((res) => {
      console.log(res);
      const response = JSON.parse(JSON.stringify(res));
      alert('You are registered Succussfully');
      setTimeout(() => {
        this.router.navigate(['/signIn']);
      });
    }, (err) => {
      this.errorMessage = err.error.error.errors[0].message;
      console.log(this.errorMessage);
    });
  }
passwordValidator = (c: AbstractControl) => {
    console.log(1111);
    const password = c.get('password');
    const confirmPassword = c.get('confirmPassword');
    if (password.pristine || confirmPassword.pristine) {
      // c.get('confirmPassword').setErrors(null);
      return null;
    }
    else{
      if(password.value != confirmPassword.value){
        c.get('confirmPassword').setErrors({ misMatch: true });
      }
      else{
        c.get('confirmPassword').setErrors(null);
      }
      return password.value != confirmPassword.value ? { misMatch: true } : null;
    }
  }
}


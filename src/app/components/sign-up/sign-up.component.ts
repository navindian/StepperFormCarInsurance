import { Overlay } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { Component, Input, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProgressSpinnerComponent } from '../progress-spinner/progress-spinner.component';
import { SignUpService } from './sign-up.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css'],
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

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private signUpService: SignUpService,
    private overlay: Overlay
  ) {}

  // validators for form elements
  ngOnInit(): void {
    this.signUpForm = this.fb.group(
      {
        email: [
          '',
          [
            Validators.required,
            Validators.pattern(
              /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/
            ),
          ],
        ],

        password: ['', [Validators.required]],
        confirmPassword: ['', [Validators.required]],
        mobile: [
          '',
          [
            Validators.required,
            Validators.minLength(10),
            Validators.maxLength(10),
          ],
        ],
      },
      { validator: this.passwordValidator }
    );
  }

  // user registration function
  register = () => {
    const overlayRef = this.overlay.create({
      positionStrategy: this.overlay
        .position()
        .global()
        .centerHorizontally()
        .centerVertically(),
      hasBackdrop: true,
    });
    overlayRef.attach(new ComponentPortal(ProgressSpinnerComponent));
    this.signUpService.registerUser(this.signUpForm.value).subscribe(
      (res) => {
        overlayRef.detach();
        const response = JSON.parse(JSON.stringify(res));
        alert('You are registered Succussfully');
        setTimeout(() => {
          this.router.navigate(['/signIn']);
        });
      },

      (err) => {
        overlayRef.detach();
        this.errorMessage = err.error.error.errors[0].message;
        alert(this.errorMessage)
      }
    );
  };

  // password validation function
  passwordValidator = (c: AbstractControl) => {
    const password = c.get('password');
    const confirmPassword = c.get('confirmPassword');

    if (password.pristine || confirmPassword.pristine) {
      return null;
    } else {
      if (password.value !== confirmPassword.value) {
        c.get('confirmPassword').setErrors({ misMatch: true });
      } else {
        c.get('confirmPassword').setErrors(null);
      }
      return password.value !== confirmPassword.value
        ? { misMatch: true }
        : null;
    }
  };
}

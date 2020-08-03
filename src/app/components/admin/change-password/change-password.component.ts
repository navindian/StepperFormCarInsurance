import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ChangePasswordService } from './change-password.service';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {
  changePasswordForm: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private changePasswordService:ChangePasswordService
  ) { }

  ngOnInit(): void {
    this.changePasswordForm = this.formBuilder.group({
      oldPassword:['',[Validators.required]],
      newPassword:['',[Validators.required]]
    })
  }
  submit=()=>{
    this.changePasswordService.updatePassword(this.changePasswordForm.value).subscribe(
      (res) => {console.log(res);
      },
      (err) => {console.log(err);
      }
    )
  }
}

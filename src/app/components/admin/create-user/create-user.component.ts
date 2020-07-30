import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CreateUserService } from './create-user.service';
import { Router } from '@angular/router';

interface User {
  value: string;
  viewValue: string;
}

interface Seller {
  value: string;
  viewValue: string;
}

interface Group {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {

  users: User[] = [
    {value: 'user-0', viewValue: 'User-1'},
    {value: 'user-1', viewValue: 'User-2'},
    {value: 'user-2', viewValue: 'User-3'}
  ];

  sellers: Seller[] = [
    {value: 'seller-0', viewValue: 'Seller-1'},
    {value: 'seller-1', viewValue: 'Seller-2'},
    {value: 'seller-2', viewValue: 'Seller-3'}
  ];

  groups: Group[] = [
    {value: 'group-0', viewValue: 'Group-1'},
    {value: 'group-1', viewValue: 'Group-2'},
    {value: 'group-2', viewValue: 'Group-3'}
  ];

  @Input() firstName: string;
  @Input() middleName: string;
  @Input() lastName: string;
  @Input() email: string;
  password: string="14081997";
  mobile: string="8550021450";
  groupId:number;
  is2FAEnabled:boolean;
  isActive:boolean;

  errorMessage: string;
  userForm: FormGroup;
  adminerrorMessage: string;
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private adminSignUpService: CreateUserService
  ) { }

  ngOnInit(): void {
    this.userForm = this.fb.group(
      {
        'middleName':[this.middleName],
        'groupId': [this.groupId],
        'is2FAEnabled': [this.is2FAEnabled],
        'isActive': [this.isActive],
        'password': [this.password],
        'mobile': [this.mobile],
        'firstName': [this.firstName, [Validators.required]],
        'lastName': [this.lastName, [Validators.required]],
        'email': [this.email, [Validators.required, Validators.email]]
      })
    }
    register(){
    this.adminSignUpService.createUser(this.userForm.value).subscribe(
      (res) => {
      const response = JSON.parse(JSON.stringify(res));
      alert('You have created new user Succussfully');
      console.log(response);
      /* this.router.navigate(['/users/create-user']); */
     
      },
      (err) => {

        this.errorMessage = err.error.error;
        console.log(this.errorMessage);
        alert('Please enter valid credentials'); 
  
      }
      );
    }
  }

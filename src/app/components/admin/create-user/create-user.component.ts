import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';


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

  firstName: string;
  middleName: string;
  lastName: string;
  email: string;
  password: string;
  errorMessage: string;
  userForm: FormGroup;

  constructor(
    private fb: FormBuilder,
  ) { }

  ngOnInit(): void {
    this.userForm = this.fb.group(
      {
        'firstName': [this.firstName, [Validators.required]],
        'lastName': [this.lastName, [Validators.required]],
        'email': [this.email, [Validators.required, Validators.email]]
      })
    }

}

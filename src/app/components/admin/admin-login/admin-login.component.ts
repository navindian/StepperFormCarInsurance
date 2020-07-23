import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {
  hide = true;
  loginForm: FormGroup;
  constructor(private fb:FormBuilder,private router:Router) { }

  ngOnInit(): void {
    this.loginForm=this.fb.group({
      userName: ['',[Validators.required]],
      password: ['',[Validators.required]]
    })
  }
  login(){
    if(this.loginForm.controls['userName'].value==='admin' && this.loginForm.controls['password'].value==='admin'){
      sessionStorage.setItem('isAdminLogged','true');
      this.router.navigate(['admin']);
    }
    else{
      alert('Wrong Credentials')
    }
  }
}

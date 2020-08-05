import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CreateUserService {

  constructor(private http:HttpClient) { }
  url='http://localhost:3000/api/v1/auth/signup';
  createUser=userData => {

    return this.http.post(this.url, userData);
  }
}

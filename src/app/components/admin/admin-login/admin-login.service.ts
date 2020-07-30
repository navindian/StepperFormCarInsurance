import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AdminLoginService {

  constructor(private http: HttpClient) { }
  url = 'http://localhost:3000/api/v1/auth/login';
  getLoginData1=data => {
    return this.http.post(this.url, data);
  }
  
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  constructor(private http: HttpClient) {}
  url = 'http://3.6.39.44:4000/user/login';
  getLoginData = (data: any) => {
    return this.http.post(this.url, data);
  }
}

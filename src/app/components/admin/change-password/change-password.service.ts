import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ChangePasswordService {

  constructor(private http: HttpClient) { }
  url = 'http://localhost:3000/api/v1/auth/update-password';

  updatePassword=(data)=>{
    return this.http.post(this.url,data);
  }
}

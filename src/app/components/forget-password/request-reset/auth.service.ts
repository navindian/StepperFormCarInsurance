import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const URL = 'http://3.6.39.44:4000/user/resetpassword';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient) { }


  requestReset(body): Observable<any> {
    return this.http.post(`${URL}/req-reset-password`, body);
  }
  newPassword(body): Observable<any> {
    return this.http.post(`${URL}/new-password`, body);
  }

  ValidPasswordToken(body): Observable<any> {
    return this.http.post(`${URL}/valid-password-token`, body);
  }
  
  }


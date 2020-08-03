import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { Headers,Http,HttpModule } from '@angular/http';
import { CookieService } from 'ngx-cookie-service';
import { Profile } from '../profile/profile';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators'; 

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  AccessToken:any;
  constructor(private http:Http, private cookie:CookieService) { this.AccessToken = this.cookie.get('token') }

  private profileAPI = "http://localhost:3000/api/v1/profile";

  getProfile(): Observable<Profile>{
    var headersForProfileAPI = new Headers();

    if(this.AccessToken) {
      console.log(this.AccessToken);
      headersForProfileAPI.append('Authorization', 'Bearer' + this.AccessToken)
    }

    return this.http.get(this.profileAPI, {
      headers: headersForProfileAPI
    }).pipe(map(res => res.json()));

  };

}

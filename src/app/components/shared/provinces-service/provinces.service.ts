import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProvincesService {
  constructor(private http: HttpClient) {}
  url = 'http://3.6.39.44:4000/provinces/getProvincesList';

  getProvinces(): Observable<object[]> {
    return  this.http.get(this.url) as Observable<object[]>;
  }
}

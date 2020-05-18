import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

  getApiData(){
    return this.http.get('https://randomapi.com/api/6de6abfedb24f889e0b5f675edc50deb')
  }

}

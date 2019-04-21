import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private url = 'https://randomuser.me/api/?results=10';
private dataKey = 'DataKey';

  constructor(private http: HttpClient) { }
  getOnlineData(){
  this.http.get(this.url).subscribe((data: { results:[]})=>{
    localStorage.setItem(this.dataKey,JSON.stringify(data.results));
    console.log(data);
  });
  }
  getCachedData(){
    return JSON.parse(localStorage.getItem(this.dataKey));
  }
}

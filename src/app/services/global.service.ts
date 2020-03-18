import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LoginData } from '../models/login-data.model';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {

  isLogin:Boolean = false;
  errorMsg:string = '';
  headerFlag:Boolean = false;

  constructor(private http:HttpClient) { }

  authLogin(logindata:LoginData) {
    return this.http.post<any>('https://reqres.in/api/login',logindata);
  }

  fetchUsers(page) {
    return this.http.get('https://reqres.in/api/users?page='+page);
  }

}

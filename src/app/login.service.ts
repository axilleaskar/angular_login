import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Ilogin} from '../assets/data/login';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs/Observable';
@Injectable({
  providedIn: 'root'
})
export class LoginService {
  
  public loginStatus = false;
  private url:string = "/assets/data/login.json";
  constructor(private http: HttpClient) { }

  getLogin(): Observable<Ilogin[]>{
    return this.http.get<Ilogin[]>(this.url);
  }

 login(un:string,pw:string) {
  if(un == "admin" && pw =="admin"){
    localStorage.setItem("username", "admin");
    return true;
    }
    else{
      return false;
    }
 }

}


import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import { LoginComponent } from './login/login.component';
import { HomeCComponent } from './home-c/home-c.component';
import { Register2Component } from './register2/register2.component';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private url1='assets/data.json'
 
  private users = [];

  constructor( private httpclient:HttpClient) { 

    this.httpclient.get<LoginComponent[]>(this.url1).subscribe((data:any)=>{
        this.users = data;
    });

  }


  getUser(uName,PW){

    return this.users.filter((user)=>{
      return (user.name === uName) && (user.password === PW)
    });
  }

  addNewUser(newUser){
      this.users.push(newUser);
      console.log(this.users)
  }
}

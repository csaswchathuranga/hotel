import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import { LoginComponent } from './login/login.component';
import { HomeCComponent } from './home-c/home-c.component';
import { Register2Component } from './register2/register2.component';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private url1='assets/data.json'
  private url2='assets/food.json'

  constructor( private httpclient:HttpClient , private userService:UserService) { }

 

  login(uName,PW){

    var promise = new Promise((resolve, reject) => {
      var myUser = this.userService.getUser(uName,PW);
      if(myUser.length>0){
        resolve(myUser)
      }else{
        reject('no user');
      }
    });
    return promise;

  }

  register(userObj){
    this.userService.addNewUser(userObj);
  }

}

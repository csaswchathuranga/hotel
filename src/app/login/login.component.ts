import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import{AuthService} from 'src/app/auth.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private httpClient:HttpClient,private auth:AuthService,private router:Router) { }
  public users:any=[];

  public userObject = {
    userName:null,
    password:null
  }
  

  ngOnInit() {

  }

  loginUser(){
   
    console.log(this.userObject)
    this.auth.login(this.userObject.userName,this.userObject.password).then((data:any)=>{
      console.log(data);
    if(data.length>0){
      const uu = JSON.stringify(data[0]);
      localStorage.setItem('userCredin',uu)
      this.router.navigate(['homec'])

}
    }).catch((error)=>{
      console.log(error);
    })
    
  }

}

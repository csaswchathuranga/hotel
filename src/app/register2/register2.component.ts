import { Component, OnInit } from '@angular/core';
import{HttpClient} from'@angular/common/http'
import{} from'@angular/common/'
import { AuthService } from '../auth.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-register2',
  templateUrl: './register2.component.html',
  styleUrls: ['./register2.component.css']
})
export class Register2Component implements OnInit {

  name:any
  private url1='assets/data.json'
  public userRegisterObj={
    name:null,
    password:null,
    phone:null,
    email:null,
    uName:null,
    cPassword:null,
    role:null
  }
 
  constructor(private httpClient:HttpClient,private auth:AuthService , private router:ActivatedRoute) { 
    this.router.params.subscribe((para)=>{
      this.userRegisterObj.role = para.role;
    })
  }

  ngOnInit() {
  }

  registerUser(){
console.log(this.userRegisterObj)
// this.userRegisterObj.role=localStorage.getItem(['Rrole'])
  if(this.userRegisterObj.password===this.userRegisterObj.cPassword){

    var user = {
      name:this.userRegisterObj.uName,
      password:this.userRegisterObj.password,
      role:this.userRegisterObj.role
    }
    this.auth.register(user)
  }


  }

}

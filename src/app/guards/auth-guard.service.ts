import { Injectable } from '@angular/core';
import { CanActivate ,Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate{

canActivate(){

  if(localStorage.getItem('userCredin')){
    return true
  }
  else{
    this.router.navigate(['login']);
    return false;
  }

  
}

  constructor(private router:Router) { }



}

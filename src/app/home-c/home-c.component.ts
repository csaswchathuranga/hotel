import { Component, OnInit, AfterViewInit } from '@angular/core';
import{AuthService} from 'src/app/auth.service'
import { FoodService } from '../food.service';
import { Router } from '@angular/router';
import { routerNgProbeToken } from '@angular/router/src/router_module';

@Component({
  selector: 'app-home-c',
  templateUrl: './home-c.component.html',
  styleUrls: ['./home-c.component.css']
})
export class HomeCComponent implements OnInit , AfterViewInit{

  foods:any=[]
  role:any
  constructor(private foodService:FoodService,private route:Router) {
    this.role = JSON.parse(localStorage.getItem('userCredin')).role;
   }

  ngOnInit() {
    
  }

  ngAfterViewInit(){
    this.foodService.getFoods().then(data=>{
      this.foods = data;
    });
  }

  logout(){

    this.route.navigate(['/login'])
    localStorage.clear();
  }


}

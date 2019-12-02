import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FoodService } from '../food.service';

@Component({
  selector: 'app-home-c2',
  templateUrl: './home-c2.component.html',
  styleUrls: ['./home-c2.component.css']
})
export class HomeC2Component implements OnInit {

  action:string
  id:number

  public foodObject={
    name:null,
    image:null,
    description:null,
    category:null,
    price:null,
    id:null
  }

  constructor(private aRouter:ActivatedRoute,private foodService:FoodService,private router : Router) { 

    this.aRouter.params.subscribe(data=>{
      this.action=data.action
      this.id=parseInt(data.id)
      console.log(data)
      if(this.action==="edit"){
        this.getFood()
      }
      
    })
  }

  ngOnInit() {
  }

  deleteFood(){
    this.foodService.deleteFood(this.foodObject)

  }

  saveFood(){
     this.foodService.addNewFood(this.foodObject)
    this.router.navigate(['homec']);
  }

  getFood(){
    this.foodObject=this.foodService.getFood(this.id)[0]
    console.log(this.foodService.getFood(this.id))
  }
  updateFood(){

    this.foodService.updateFood(this.foodObject)
    this.router.navigate(['homec'])
  }

}

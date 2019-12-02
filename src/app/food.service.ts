import { Injectable } from '@angular/core';
import { FoodList } from './foodList';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class FoodService {
  private foods = []

  

  constructor(private route:Router) { 
    this.foods = FoodList.foods;
  }


  getFood(id){
    return this.foods.filter((food)=>{
      return (food.id === id)
    });
  }

  addNewFood(newFood){
    newFood.id = this.getRandomArbitrary(0,99999999999);
      this.foods.push(newFood);
      console.log(this.foods)
  }

  // getFoods(){
  //   console.log(this.foods);
  //   return this.foods;
  // }
  getFoods(){

    var promise = new Promise((resolve, reject) => {
      if(this.foods.length>0){
        resolve(this.foods)
      }else{
        reject('no user');
      }
    });
    return promise;

  }

  updateFood(val){

    this.foods.forEach(item=>{
      if(item.id===val.id){
        item=val

      }
    })
  }

deleteFood(val){
  
  this.foods.forEach(item=>{
    if(item.id===val.id){
       //const index=this.foods.indexOf(val.id)
        let index=this.foods.findIndex(ab=>ab.id===val.id)
       console.log(index)
       this.foods.splice(index,1)
       this.route.navigate(['/homec'])
       
      
    }
  })

}

 getRandomArbitrary(min, max) {
    return parseInt(Math.random() * (max - min) + min);
  }
}

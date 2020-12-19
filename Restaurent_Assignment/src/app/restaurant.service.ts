import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RestaurantService {

  constructor() { }

  myArr:string[] = ["Shiva Sagar","Burger King","Kunj Vihar", "Swagath", "Eat Away"];

  public getList(){
    return this.myArr;
  }
}

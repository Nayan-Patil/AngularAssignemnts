import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdvertisementServiceService {
  advertisementList = [];

  
  getArray(){
    return this.advertisementList;
  }

  constructor() { }
  addAdvertisement(advertisement:any){
    this.advertisementList.push(advertisement);
    console.log(this.advertisementList);
    console.log(advertisement)
  }
  getAllAdvertises(){
    return this.advertisementList;
  }
   deleteAdvertisement(advertisement:any){
    this.advertisementList = this.advertisementList.filter(ad => ad!=advertisement);
    return this.advertisementList;

  }




}

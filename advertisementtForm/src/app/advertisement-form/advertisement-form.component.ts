import { JsonPipe } from '@angular/common';
import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, FormArray, FormBuilder } from '@angular/forms';
import {NgForm} from '@angular/forms';
import {AdvertisementServiceService} from '../advertisement-service.service';
import {Router}from '@angular/router';
@Component({
  selector: 'app-advertisement-form',
  templateUrl: './advertisement-form.component.html',
  styleUrls: ['./advertisement-form.component.css']
})
export class AdvertisementFormComponent implements OnInit {

  constructor(private advertisementService:AdvertisementServiceService,
    private router:Router){
   
  }
  adList=[];

  /*adList: {
    position: number;
    title: string;
    name: "Nayan";
    category: string;
    description: string;
  }[];*/


 /* constructor(private _formBuilder : FormBuilder){
    this.adForm= this._formBuilder.group({
      adList: this._formBuilder.array([])
    });
  } */
  ads=[];

  categories = ["Furniture", "Hardware", "Mobile"];
  adForm = new FormGroup({
    title: new FormControl(''),
    name: new FormControl('Nayan'),
    category: new FormControl(''),
    description: new FormControl('')
  }); 

  
    // tslint:disable-next-line: member-ordering
    //@Input adList: any[];
 
  
  ngOnInit() {
    
  }


  onSubmit(): void{
    // tslint:disable-next-line: no-bitwise
    
    console.log(this.adList);
    console.log(this.adForm.value)
    this.advertisementService.addAdvertisement(this.adForm.value);
    this.adList.push(this.adForm.value);

  }
  deleteAd(ad:any){
    this.adList=this.advertisementService.deleteAdvertisement(ad);
  }
  editAd(ad:any){
    this.router.navigate(['/edit'])
  }
  
/*getAllAdvertise(){
  this.adList=this.advertisementService.getAllAdvertises();
  console.log(this.adList)
}
*/
}

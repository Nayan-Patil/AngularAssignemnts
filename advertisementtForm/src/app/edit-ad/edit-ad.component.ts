import { Component, OnInit } from '@angular/core';
import {AdvertisementServiceService} from '../advertisement-service.service';
import {Router} from '@angular/router';
import {Edit} from '../edit';
@Component({
  selector: 'app-edit-ad',
  templateUrl: './edit-ad.component.html',
  styleUrls: ['./edit-ad.component.css']
})
export class EditAdComponent implements OnInit {

  constructor(private router:Router, public advertisementService:AdvertisementServiceService) { }

  ngOnInit(): void {
  }
  categories=['Furniture','Hardware','Mobile'];

  categoryHasError=true;
  submitted=false;
   errorMsg='';
  editModel=new Edit('','','','','');

  validateCategory(value:any){
     if(value==='default'){
       this.categoryHasError=true;
     }else{
       this.categoryHasError=false;
     }
  }

  onSubmit(value:any){
    let id=this.advertisementService.advertisementList.indexOf(value.edit);
    this.advertisementService.advertisementList[id].title=value.title;
    this.advertisementService.advertisementList[id].name=value.name;
    this.advertisementService.advertisementList[id].category=value.category;
    this.advertisementService.advertisementList[id].description=value.description;

    this.router.navigate(['']);
  }

}

import { Component, OnInit, Input } from '@angular/core';
import { Action } from 'rxjs/internal/scheduler/Action';
import { AdvertisementFormComponent } from '../advertisement-form/advertisement-form.component';
import {AdvertisementServiceService} from '../advertisement-service.service';


@Component({
  selector: 'app-advertisement-table',
  templateUrl: './advertisement-table.component.html',
  styleUrls: ['./advertisement-table.component.css']
})
export class AdvertisementTableComponent implements OnInit {
advertisements=[];
  constructor(private advertisementservice:AdvertisementServiceService) { }

  advertisements1={}
 

  ngOnInit(): void {
    this.advertisements1=this.advertisementservice.getAllAdvertises();
   
    
  }


}

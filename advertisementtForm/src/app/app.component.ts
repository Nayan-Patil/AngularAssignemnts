import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm } from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
 
  
  //arrayData: formData[] = [];
  
  

  /*data(f: NgForm){
    this.arrayData.push(f.value);
  }
public formData(
    title: string,
    name: "Nayan",
    category: string,
    description:string,

)*/
adlist: any;
getList(event: any){
  this.adlist=event;
}

ngOnInit(): void {
    
}

}

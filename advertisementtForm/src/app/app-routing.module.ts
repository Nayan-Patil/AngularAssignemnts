import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdvertisementTableComponent } from './advertisement-table/advertisement-table.component';
import { AdvertisementFormComponent } from './advertisement-form/advertisement-form.component';
import { EditAdComponent } from './edit-ad/edit-ad.component';

const routes: Routes = [
  {path: 'table', component: AdvertisementTableComponent},
  {path: '', component: AdvertisementFormComponent},
  {path:'edit', component:EditAdComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponents = [AdvertisementTableComponent, AdvertisementFormComponent, EditAdComponent];
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule, routingComponents} from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AdvertisementTableComponent } from './advertisement-table/advertisement-table.component';
import { MatTableModule } from '@angular/material/table';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AdvertisementFormComponent } from './advertisement-form/advertisement-form.component';
import { EditAdComponent } from './edit-ad/edit-ad.component';
@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    AdvertisementFormComponent,
    AdvertisementTableComponent,
    EditAdComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PetsComponent } from './pets.component';
import { SharedModule } from '../shared/shared.module';
import { PetRoutingModule } from './pets-routing.module';
import { HomeComponent } from './home/home.component';
import { ListComponent } from './list/list.component';
import { DetailsComponent } from './details/details.component';



@NgModule({
  declarations: [
    HomeComponent,
    ListComponent,
    DetailsComponent,
    PetsComponent
  ],
  imports: [
    PetRoutingModule,
    SharedModule
  ]
})
export class PetsModule { }

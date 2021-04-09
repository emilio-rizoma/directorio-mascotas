import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailsComponent } from './details/details.component';
import { HomeComponent } from './home/home.component';
import { ListComponent } from './list/list.component';
import { PetsComponent } from './pets.component';



const routes: Routes = [
  {
    path: '', component: PetsComponent, children: [
      { path: 'home', component: HomeComponent },
      { path: 'list', component: ListComponent },
      { path: 'details/:id', component: DetailsComponent },
      { path: '**', redirectTo: 'home', pathMatch: 'full' }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PetRoutingModule { }

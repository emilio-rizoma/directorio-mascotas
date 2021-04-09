import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { ModalComponent } from './components/modal/modal.component';
import { LoaderComponent } from './components/loader/loader.component';


@NgModule({
  declarations: [
    NavBarComponent,
    ModalComponent,
    LoaderComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    CollapseModule.forRoot(),
  ],
  exports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,

    NavBarComponent,
    ModalComponent,
    LoaderComponent
  ]
})
export class SharedModule { }

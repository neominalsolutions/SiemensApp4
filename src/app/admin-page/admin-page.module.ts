import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminPageRoutingModule } from './admin-page-routing.module';
import { UsersPageComponent } from './users-page/users-page.component';


@NgModule({
  declarations: [
    UsersPageComponent
  ],
  imports: [
    CommonModule,
    AdminPageRoutingModule
  ]
})
export class AdminPageModule { }

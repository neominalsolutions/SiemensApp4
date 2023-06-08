import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CrmPageRoutingModule } from './crm-page-routing.module';
import { EmployeesPageComponent } from './employees-page/employees-page.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    EmployeesPageComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    CrmPageRoutingModule
  ]
})
export class CrmPageModule { }

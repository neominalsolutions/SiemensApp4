import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CrmPageRoutingModule } from './crm-page-routing.module';
import { EmployeesPageComponent } from './employees-page/employees-page.component';


@NgModule({
  declarations: [
    EmployeesPageComponent
  ],
  imports: [
    CommonModule,
    CrmPageRoutingModule
  ]
})
export class CrmPageModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeeRoutingModule } from './employee-routing.module';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import {NgxPaginationModule} from 'ngx-pagination';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { EmployeeCreateComponent } from './employee-create/employee-create.component';
import {EmployeeEditComponent} from './employee-edit/employee-edit.component';
import {HomeModule} from '../home/home.module';
import { DetailEmployeeComponent } from './detail-employee/detail-employee.component';


@NgModule({
  declarations: [EmployeeListComponent, EmployeeCreateComponent, EmployeeEditComponent, DetailEmployeeComponent],
    imports: [
        CommonModule,
        EmployeeRoutingModule,
        NgxPaginationModule,
        FormsModule,
        ReactiveFormsModule,
        HomeModule
    ]
})
export class EmployeeModule { }

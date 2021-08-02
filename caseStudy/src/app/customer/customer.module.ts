import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerRoutingModule } from './customer-routing.module';
import { CustomerCreateComponent } from './customer-create/customer-create.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { CustomerEditComponent } from './customer-edit/customer-edit.component';
import {CustomerListComponent} from './customer-list/customer-list.component';
import {NgxPaginationModule} from 'ngx-pagination';
import {HomeModule} from '../home/home.module';


@NgModule({
  declarations: [CustomerListComponent, CustomerCreateComponent, CustomerEditComponent],
    imports: [
        CommonModule,
        CustomerRoutingModule,
        ReactiveFormsModule,
        NgxPaginationModule,
        FormsModule,
        HomeModule
    ]
})
export class CustomerModule { }

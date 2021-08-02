import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CustomerListComponent} from './customer-list/customer-list.component';
import {CustomerCreateComponent} from './customer-create/customer-create.component';
import {CustomerEditComponent} from './customer-edit/customer-edit.component';


const routes: Routes = [
  {path: '',
    pathMatch: 'full',
    redirectTo: 'list',
    component: CustomerListComponent
  },
  {path: 'list',
    component: CustomerListComponent
  },
  {path: 'create',
    component: CustomerCreateComponent
  },
  {path: 'edit/:id',
    component: CustomerEditComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerRoutingModule { }

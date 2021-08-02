import {Component, OnInit} from '@angular/core';
import {Customer} from '../../model/customer/customer';
import {CustomerService} from '../../service/customer/customer.service';
import {DeleteComponent} from '../../modal/delete/delete.component';
import {MatDialog} from '@angular/material/dialog';
import {DetailComponent} from '../detail/detail.component';
import {CustomerType} from '../../model/customer/customer-type';
import {CustomerTypeService} from '../../service/customer_type/customer-type.service';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {
  customers: Customer[] = [];
  p: number;
  keyWord = '';
  keyWord2: any;
  customerTypes: CustomerType[];
  birthday: Date;
  birthday2: Date;

  constructor(private customerService: CustomerService,
              private customerTypeService: CustomerTypeService,
              public dialog: MatDialog) {
  }

  ngOnInit(): void {
    this.getAll();

  }

  getAll() {
    this.customerService.getAll().subscribe(customers => {
      this.customers = customers;
      this.customerTypeService.getAll().subscribe(customerType => {
        this.customerTypes = customerType;
      });
    });
  }

  onDeleteHandler(id): void {
    const dialogRef = this.dialog.open(DeleteComponent, {
      width: '250px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      if (result) {
        this.customerService.delete(id).subscribe(next => {
          this.getAll();
        });
      }
    });
  }

  search() {
    this.customerService.search(this.keyWord, this.keyWord2, this.birthday, this.birthday2).subscribe(customer => {
      this.customers = customer;
    });
  }

  onDetailHandler(customer: Customer) {
    const dialogRef = this.dialog.open(DetailComponent, {
      width: '250px',
      data: customer
    });
  }
}

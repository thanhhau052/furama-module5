import {Component, OnInit} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {DeleteComponent} from '../../modal/delete/delete.component';
import {EmployeeService} from '../../service/employee/employee.service';
import {Employee} from '../../model/employee/employee';
import {DetailComponent} from '../../customer/detail/detail.component';
import {DetailEmployeeComponent} from '../detail-employee/detail-employee.component';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  employees: Employee[] = [];
  p: number;
  keyWord = '';

  constructor(private employeeService: EmployeeService,
              public dialog: MatDialog) {
  }

  ngOnInit(): void {
    this.getAll();

  }

  getAll() {
    this.employeeService.getAll().subscribe(employees => {
      this.employees = employees;
    });
  }

  onDeleteHandler(id): void {
    const dialogRef = this.dialog.open(DeleteComponent, {
      width: '250px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      if (result) {
        this.employeeService.delete(id).subscribe(next => {
          this.getAll();
        });
      }
    });
  }
  onDetailHandler(employee: Employee) {
    const dialogRef = this.dialog.open(DetailEmployeeComponent, {
      width: '250px',
      data: employee
    });
  }
  search() {
    this.employeeService.search(this.keyWord).subscribe(employees => {
      this.employees = employees;
    });
  }
}

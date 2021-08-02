import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {EmployeeService} from '../../service/employee/employee.service';
import {EducationDegree} from '../../model/employee/education-degree';
import {Division} from '../../model/employee/division';
import {Position} from '../../model/employee/position';
import {PositionService} from '../../service/employee/position.service';
import {EducationDegreeService} from '../../service/employee/education-degree.service';
import {DivisionService} from '../../service/employee/division.service';

@Component({
  selector: 'app-employee-edit',
  templateUrl: './employee-edit.component.html',
  styleUrls: ['./employee-edit.component.css']
})
export class EmployeeEditComponent implements OnInit {

  editForm: FormGroup;
  id: number;
  positions: Position[];
  educationDegrees: EducationDegree[];
  divisions: Division[];

  constructor(private employeeService: EmployeeService,
              private activatedRoute: ActivatedRoute,
              private positionService: PositionService,
              private educationDegreeService: EducationDegreeService,
              private divisionService: DivisionService,
              private router: Router) {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      this.id = +paramMap.get('id');
      this.getEmployee(this.id);
    });
  }

  ngOnInit() {
    this.getAll();
  }

  getEmployee(id: number) {
    return this.employeeService.findById(id).subscribe(employee => {
      this.editForm = new FormGroup({
        id: new FormControl(employee.id),
        code: new FormControl(employee.code, [Validators.required, Validators.pattern('^(KH)-[0-9]{4}$')]),
        name: new FormControl(employee.name, [Validators.required, Validators.pattern('[a-z]')]),
        position: new FormControl(employee.position, [Validators.required]),
        educationDegree: new FormControl(employee.educationDegree, [Validators.required]),
        division: new FormControl(employee.division, [Validators.required]),
        birthday: new FormControl(employee.birthday, [Validators.required]),
        idCard: new FormControl(employee.idCard, [Validators.required, Validators.pattern('^[0-9]{9}|[0-9]{12}')]),
        salary: new FormControl(employee.salary, [Validators.required]),
        // tslint:disable-next-line:max-line-length
        phone: new FormControl(employee.phone, [Validators.required, Validators.pattern('^((090)|(091)|(\\\\(84\\\\)\\\\+(90))|(\\\\(84\\\\)+(91)))[0-9]{7}$')]),
        email: new FormControl(employee.email, [Validators.required, Validators.email]),
        address: new FormControl(employee.address, [Validators.required])
      });
    });
  }

  getAll() {
    this.positionService.getAll().subscribe(position => {
      this.positions = position;
    });
    this.educationDegreeService.getAll().subscribe(educationDegree => {
      this.educationDegrees = educationDegree;
    });
    this.divisionService.getAll().subscribe(division => {
      this.divisions = division;
    });
  }

  update(id: number) {
    const employee = this.editForm.value;
    this.employeeService.update(id, employee).subscribe(() => {
      this.router.navigate(['/employee/list']);
      alert('Cập nhật thành công');
    }, e => {
      console.log(e);
    });
  }

  compareFn(c1: any, c2: any): boolean {
    return c1 && c2 ? c1.id === c2.id : c1 === c2;
  }
}

import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {EducationDegree} from '../../model/employee/education-degree';
import {Division} from '../../model/employee/division';
import {Position} from '../../model/employee/position';
import {PositionService} from '../../service/employee/position.service';
import {DivisionService} from '../../service/employee/division.service';
import {EducationDegreeService} from '../../service/employee/education-degree.service';
import {EmployeeService} from '../../service/employee/employee.service';

@Component({
  selector: 'app-employee-create',
  templateUrl: './employee-create.component.html',
  styleUrls: ['./employee-create.component.css']
})
export class EmployeeCreateComponent implements OnInit {

  positions: Position[];
  educationDegrees: EducationDegree[];
  divisions: Division[];
  createForm: FormGroup = new FormGroup({
    id: new FormControl(),
    code: new FormControl('', [Validators.required, Validators.pattern('^(KH)-[0-9]{4}$')]),
    name: new FormControl('', [Validators.required, Validators.pattern('[a-z]')]),
    position: new FormControl('', [Validators.required]),
    educationDegree: new FormControl('', [Validators.required]),
    division: new FormControl('', [Validators.required]),
    birthday: new FormControl('', [Validators.required]),
    idCard: new FormControl('', [Validators.required, Validators.pattern('^[0-9]{9}|[0-9]{12}')]),
    salary: new FormControl('', [Validators.required]),
    // tslint:disable-next-line:max-line-length
    phone: new FormControl('', [Validators.required, Validators.pattern('^((090)|(091)|(\\\\(84\\\\)\\\\+(90))|(\\\\(84\\\\)+(91)))[0-9]{7}$')]),
    email: new FormControl('', [Validators.required, Validators.email]),
    address: new FormControl('', [Validators.required]),
  });

  constructor(private employeeService: EmployeeService,
              private positionService: PositionService,
              private divisionService: DivisionService,
              private educationDegreeService: EducationDegreeService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.getAll();
  }

  getAll() {
    this.divisionService.getAll().subscribe(divisions => {
      this.divisions = divisions;
    });
    this.positionService.getAll().subscribe(positions => {
      this.positions = positions;
    });
    this.educationDegreeService.getAll().subscribe(educationDegrees => {
      this.educationDegrees = educationDegrees;
    });
  }

  submit() {
    if (this.createForm.valid) {
      const employee = this.createForm.value;
      this.employeeService.save(employee).subscribe(() => {
        this.createForm.reset();
        this.router.navigate(['/employee/list']);
        alert('Tạo thành công');
      }, e => {
        console.log(e);
      });
    }

  }
}

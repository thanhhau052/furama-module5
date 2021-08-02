import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {EducationDegree} from '../../model/employee/education-degree';

const API_URL = 'http://localhost:3000/educationDegree';
@Injectable({
  providedIn: 'root'
})
export class EducationDegreeService {
  constructor(private http: HttpClient) {
  }

  getAll(): Observable<EducationDegree[]> {
    return this.http.get<EducationDegree[]>(API_URL);
  }
}

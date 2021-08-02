import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Customer} from '../../model/customer/customer';
import {Employee} from '../../model/employee/employee';

const API_URL = 'http://localhost:3000/employee';
@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http: HttpClient) {
  }

  getAll(): Observable<Employee[]> {
    return this.http.get<Employee[]>(API_URL);
  }

  save(employee): Observable<Employee> {
    return this.http.post<Employee>(API_URL, employee);
  }

  findById(id: number) {
    return this.http.get<Employee>(`${API_URL}/${id}`);
  }

  update(id: number, employee: Employee): Observable<Employee> {
    return this.http.put<Employee>(`${API_URL}/${id}`, employee);
  }

  delete(id: number): Observable<Employee> {
    return this.http.delete<Employee>(`${API_URL}/${id}`);
  }

  search(name: string): Observable<Employee[]> {
    return this.http.get<Employee[]>(API_URL + '?name_like=' + name);
  }
}

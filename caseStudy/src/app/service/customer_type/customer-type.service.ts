import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {Customer} from '../../model/customer/customer';
import {HttpClient} from '@angular/common/http';
import {CustomerType} from '../../model/customer/customer-type';

const API_URL = 'http://localhost:3000/customerType';
@Injectable({
  providedIn: 'root'
})
export class CustomerTypeService {

  constructor(private http: HttpClient) {
  }
  getAll(): Observable<CustomerType[]> {
    return this.http.get<CustomerType[]>(API_URL);
  }

  save(customerType): Observable<CustomerType> {
    return this.http.post<CustomerType>(API_URL, customerType);
  }

  findById(id: number) {
    return this.http.get<CustomerType>(`${API_URL}/${id}`);
  }

  update(id: number, customerType: CustomerType): Observable<CustomerType> {
    return this.http.put<CustomerType>(`${API_URL}/${id}`, customerType);
  }

  delete(id: number): Observable<CustomerType> {
    return this.http.delete<Customer>(`${API_URL}/${id}`);
  }
}

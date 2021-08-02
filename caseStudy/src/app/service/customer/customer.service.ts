import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Customer} from '../../model/customer/customer';

const API_URL = 'http://localhost:3000/customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  constructor(private http: HttpClient) {
  }

  getAll(): Observable<Customer[]> {
    return this.http.get<Customer[]>(API_URL);
  }

  save(customer): Observable<Customer> {
    return this.http.post<Customer>(API_URL, customer);
  }

  findById(id: number) {
    return this.http.get<Customer>(`${API_URL}/${id}`);
  }

  update(id: number, customer: Customer): Observable<Customer> {
    return this.http.put<Customer>(`${API_URL}/${id}`, customer);
  }

  delete(id: number): Observable<Customer> {
    return this.http.delete<Customer>(`${API_URL}/${id}`);
  }

  search(name: string, name2: string, birthday: Date, birthday2: Date): Observable<Customer[]> {
    // tslint:disable-next-line:max-line-length
    return this.http.get<Customer[]>(API_URL + '?name_like=' + name + '&customerType.name_like=' + name2 + '&birthday_start' + birthday + '&birthday_end' + birthday2);
  }
}

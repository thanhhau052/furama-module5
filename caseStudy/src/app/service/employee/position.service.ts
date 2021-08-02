import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Position} from '../../model/employee/position';

const API_URL = 'http://localhost:3000/position';
@Injectable({
  providedIn: 'root'
})
export class PositionService {

  constructor(private http: HttpClient) {
  }

  getAll(): Observable<Position[]> {
    return this.http.get<Position[]>(API_URL);
  }
}

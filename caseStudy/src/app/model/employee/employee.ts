import {EducationDegree} from './education-degree';
import {Division} from './division';
import {Position} from './position';

export interface Employee {
  id?: number;
  code?: string;
  name?: string;
  position?: Position;
  educationDegree?: EducationDegree;
  division?: Division;
  birthday?: string;
  idCard?: string;
  salary?: string;
  phone?: string;
  email?: string;
  address?: string;
}

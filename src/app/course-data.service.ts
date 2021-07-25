import { Injectable } from '@angular/core';
import list from '../course-data.json';

interface IUser {
  id: string;
  courseCreator: string;
  courseDescription: string;
  discount: number;
  discountValidDate: any;
  price: number;
  tags: string[];
  title: string;
}

@Injectable({
  providedIn: 'root',
})
export class CourseDataService {
  constructor() {}

  public user: IUser = list;
}

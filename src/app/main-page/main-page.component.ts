import { Component, OnInit } from '@angular/core';
import { CourseDataService } from '../course-data.service';
// import { CartComponent } from '../cart/cart.component';

interface IUser {
  id: string;
  courseCreator: string;
  courseDescription: string;
  discount: number;
  discountValidTill: string;
  price: number;
  tags: string[];
  title: string;
}

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss'],
  providers: [],
})
export class MainPageComponent implements OnInit {
  courses: any = null;
  p = 1;
  // list: Array<IUser>;
  constructor(
    private courseData: CourseDataService // private cartComponent: CartComponent
  ) {}

  ngOnInit(): void {
    this.courses = this.courseData.user;
  }

  addToCart(index: IUser) {
    // this.list.push(index);
    // console.log(this.list);
    // console.log(this.list[0]);
    // this.cartComponent.renderCartList(this.list);
  }
}

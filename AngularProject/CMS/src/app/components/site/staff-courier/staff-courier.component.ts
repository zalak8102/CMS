import { Component, OnInit } from '@angular/core';
import {CourierService} from "../../../courier.service";

@Component({
  selector: 'app-staff-courier',
  templateUrl: './staff-courier.component.html',
  styleUrls: ['./staff-courier.component.css']
})
export class StaffCourierComponent implements OnInit {
  public loggedid=localStorage.getItem("id");
  public loggedrole=localStorage.getItem('role');

  public couriers = [];

  constructor(private _courierService: CourierService) {
  }

  ngOnInit(): void {
    this._courierService.getCouriers().subscribe(data => this.couriers = data);
  }

  delivered(courier): void {

    const User = {
      delivered: true,
      _id:courier._id

    };
    this._courierService.update(User).subscribe(data => {
      const userModel = data;
      if (userModel.id === '-1') {
        window.alert('Please check your response.');
      } else {
        window.alert('Delivered sucessfully.');
        this._courierService.getCouriers().subscribe(data => this.couriers = data);

      }
    });

}

}

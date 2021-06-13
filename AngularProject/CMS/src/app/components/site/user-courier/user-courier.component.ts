import { Component, OnInit } from '@angular/core';
import { CourierService } from 'src/app/courier.service';


@Component({
  selector: 'app-user-courier',
  templateUrl: './user-courier.component.html',
  styleUrls: ['./user-courier.component.css']
})
export class UserCourierComponent implements OnInit {
  public loggedid=localStorage.getItem("id");
  public loggedrole=localStorage.getItem('role');

  public couriers = [];
  constructor(private _courierService: CourierService ) { }

  ngOnInit(): void {
    this._courierService.getCouriers().subscribe(data => this.couriers=data);
  }
  bill(courier): void {

    confirm("Courier ID : "+courier.id+"\nSource : "+courier.source+"\nDestination : "+courier.destination+"\nUser ID : "+courier.userid+"\nDeliveryBoy ID : "+courier.deliveryboyid+"\nCost : "+courier.cost+"\nDate : "+courier.date);


  }

}

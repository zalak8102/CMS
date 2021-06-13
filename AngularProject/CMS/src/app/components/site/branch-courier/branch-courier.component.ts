import { Component, OnInit } from '@angular/core';
import { CourierService } from 'src/app/courier.service';


@Component({
  selector: 'app-branch-courier',
  templateUrl: './branch-courier.component.html',
  styleUrls: ['./branch-courier.component.css']
})
export class BranchCourierComponent implements OnInit {
  public loggedid=localStorage.getItem("id");
  public loggedrole=localStorage.getItem('role');
  public loggedbranch=localStorage.getItem('branch');

  public couriers = [];
  constructor(private _courierService: CourierService ) { }

  ngOnInit(): void {
    this._courierService.getCouriers().subscribe(data => this.couriers=data);
  }


 bill(courier): void {

   confirm("Courier ID : "+courier.id+"\nSource : "+courier.source+"\nDestination : "+courier.destination+"\nUser ID : "+courier.userid+"\nDeliveryBoy ID : "+courier.deliveryboyid+"\nCost : "+courier.cost+"\nDate : "+courier.date);


 }
}

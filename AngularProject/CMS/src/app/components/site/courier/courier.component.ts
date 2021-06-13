import { Component, OnInit } from '@angular/core';
import { CourierService } from 'src/app/courier.service';

@Component({
  selector: 'app-courier',
  templateUrl: './courier.component.html',
  styleUrls: ['./courier.component.css']
})
export class CourierComponent implements OnInit {

  public couriers = [];
  constructor(private _courierService: CourierService ) { }

  ngOnInit(): void {
    this._courierService.getCouriers().subscribe(data => this.couriers=data);
  }

}

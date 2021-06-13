import { Component, OnInit } from '@angular/core';
import { TransportService } from 'src/app/transport.service';

@Component({
  selector: 'app-transport',
  templateUrl: './transport.component.html',
  styleUrls: ['./transport.component.css']
})
export class TransportComponent implements OnInit {
  public loggedid=localStorage.getItem("id");
  public loggedrole=localStorage.getItem('role');
  public loggedbranch=localStorage.getItem('branch');

  public transports = [];
  public tran="transport";
  constructor(private _transportService: TransportService) { }

  ngOnInit(): void {
    this._transportService.getTransports().subscribe(data => this.transports=data);
  }
}

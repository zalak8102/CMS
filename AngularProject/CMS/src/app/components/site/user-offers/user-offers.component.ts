import { Component, OnInit } from '@angular/core';
import { OfferService } from 'src/app/offer.service';

@Component({
  selector: 'app-user-offers',
  templateUrl: './user-offers.component.html',
  styleUrls: ['./user-offers.component.css']
})
export class UserOffersComponent implements OnInit {

  public offers = [];
  constructor(private _offerService: OfferService) { }

  ngOnInit(): void {
    this._offerService.getoffers().subscribe(data => this.offers=data);
  }


}

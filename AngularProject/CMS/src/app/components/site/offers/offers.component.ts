import { Component, OnInit } from '@angular/core';
import { OfferService } from 'src/app/offer.service';

@Component({
  selector: 'app-offers',
  templateUrl: './offers.component.html',
  styleUrls: ['./offers.component.css']
})
export class OffersComponent implements OnInit {

  public offers = [];
  constructor(private _offerService: OfferService) { }

  ngOnInit(): void {
    this._offerService.getoffers().subscribe(data => this.offers=data);
  }


}

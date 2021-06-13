import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {CourierService} from "../../../courier.service";
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {from} from "rxjs";


@Component({
  selector: 'app-track',
  templateUrl: './track.component.html',
  styleUrls: ['./track.component.css']
})
export class TrackComponent implements OnInit {
  public searchform: FormGroup;
  private message: string;
  public trackdata:any;
  constructor(private router: Router,
              private courierService: CourierService,
              private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.searchform = this.formBuilder.group({
      id: ['', Validators.required]
    });
  }

  onsearch(): void {
    if (this.searchform.invalid) {
      return;
    } else {
      const User = {

        _id: this.searchform.controls.id.value
      };
      this.courierService.get(User).subscribe(data => {
        const userModel = data;
        if (userModel._id === '-1') {
          this.message = 'Please check your id';
        } else {
          console.log("yehhh");
          this.trackdata=data;
        }
      });
    }
  }


}

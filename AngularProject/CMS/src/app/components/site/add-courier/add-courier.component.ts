
import { Component, OnInit, NgZone } from '@angular/core';
import {FormGroup, FormBuilder, Validators, FormControl} from "@angular/forms";
import { Router } from '@angular/router';
import { CourierService } from '../../../courier.service';

@Component({
  selector: 'app-add-courier',
  templateUrl: './add-courier.component.html',
  styleUrls: ['./add-courier.component.css']
})
export class AddCourierComponent implements OnInit {
  courierForm: FormGroup;
  public couriers = [];

  constructor(private _courierService: CourierService,private router: Router,
              private courierService: CourierService,
              private formBuilder: FormBuilder) {
  }
  ngOnInit(): void {
    this._courierService.getCouriers().subscribe(data => this.couriers=data);
    this.courierForm=new FormGroup(
      {
        source: new FormControl('',Validators.required),
        destination:new FormControl(),
        weight:new FormControl(),
        length:new FormControl(),
        height:new FormControl(),
        width: new FormControl(),
        userid: new FormControl(),

      }
    );
  }

  onSubmit():void{
    if (this.courierForm.invalid) {
      return;
    } else {
      const User = {

        source: this.courierForm.controls.source.value,
        destination: this.courierForm.controls.destination.value,
        weight: this.courierForm.controls.weight.value,
        height: this.courierForm.controls.height.value,
        length: this.courierForm.controls.length.value,
        width: this.courierForm.controls.width.value,
        userid: this.courierForm.controls.userid.value,
        cost:this.courierForm.controls.weight.value/2,
        id:"C00"+(this.couriers.length+1),
        deliveryboyid:"T00"+((this.couriers.length%3)+1),
        delivered:false

      };
      this.courierService.create(User).subscribe(data => {
        const userModel = data;
        if (userModel.id === '-1') {
          window.alert('Please check your response.');
        } else {
          window.alert('Courier added sucessfully.');
        }
      });
    }
  }




}

import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, Validators, FormControl} from "@angular/forms";
import { Router } from '@angular/router';
import { EmployeeService } from '../../../employee.service';
import {stringify} from "querystring";


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registrationForm: FormGroup;
  public users = [];
  public des:string;
  private id: string;

  constructor(private employeeService: EmployeeService,private router: Router,
              private formBuilder: FormBuilder) {
  }
  ngOnInit(): void {
    this.employeeService.getEmployees().subscribe(data => this.users=data);
    this.registrationForm=new FormGroup(
      {
        name: new FormControl('',Validators.required),
        password:new FormControl(),
        cpassword:new FormControl(),
        email:new FormControl(),
        dob:new FormControl(),
        address: new FormControl(),
        branch: new FormControl(),
        designation: new FormControl()

      }
    );

  }

  onSubmit():void{
    if (this.registrationForm.invalid) {
      alert("Check your response");
      return;
    } else {
      this.des=this.registrationForm.controls.designation.value;
      let i: number;
      let c:number;
      c=0;
      for(i=0; i<this.users.length;i++) {
        if(this.users[i].designation == this.des)
        {
          c=c+1;
        }
      }
      c=c+1;
      if(this.des==="admin")
      {
        this.des="A00"+c;
      }
      else if(this.des==="client")
      {
        this.des="U00"+c;
      }
      else {
        this.des="T00"+c;
      }
      console.log(this.des);
      const User = {

        name: this.registrationForm.controls.name.value,
        password: this.registrationForm.controls.password.value,
        email: this.registrationForm.controls.email.value,
        dob: this.registrationForm.controls.dob.value,
        address: this.registrationForm.controls.address.value,
        branch: this.registrationForm.controls.branch.value,
        designation: this.registrationForm.controls.designation.value,
        id:this.des

      };

      this.employeeService.create(User).subscribe(data => {
        const userModel = data;
        if (userModel.id === '-1') {
          window.alert('Please check your response.');
        } else {
          localStorage.setItem('regid',data._id);
          //localStorage.setItem('regdes',data.designation);
          window.alert('registration done sucessfully.Your ID:'+this.des);
          this.router.navigate(['/login']);

        }
      });
    }
  }




}

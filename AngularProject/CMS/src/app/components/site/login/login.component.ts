import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {AuthService} from '../../../auth.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {from} from "rxjs";



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public loginForm: FormGroup;
  public message: string;
  public returnUrl1: string;
  public returnUrl2: string;
  public returnUrl3: string;
  public returnUrl4: string;
  public users = [];
  public transport="trasport";
  public des:string;



  constructor(private router: Router,
              private authService: AuthService,
              private formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      id: ['', Validators.required],
      password: ['', Validators.required]
    });
    this.returnUrl1 = '/branch_courier';
    this.returnUrl2 = '/staff_courier';
    this.returnUrl3 = '/add_courier';
    this.returnUrl4 = '/manage_staff';

  //  this.authService.logout();
    //console.log("logout");
  }

  login(): void {
    if (this.loginForm.invalid) {
      return;
    } else {
      localStorage.setItem('admin', 'false');
      localStorage.setItem('client', 'false');
      localStorage.setItem('transport', 'false');
      localStorage.setItem('mainadmin', 'false');

      const User = {
        id: this.loginForm.controls.id.value,
        password: this.loginForm.controls.password.value
      };
      this.authService.login(User).subscribe(data => {
        const userModel = data;
        if (userModel._id === '-1') {
          this.message = 'Please check your userid and password';
        } else {
          console.log(userModel._id);
          localStorage.setItem('isLoggedIn', 'true');
          localStorage.setItem('id', userModel.id);

          this.authService.getUser(userModel._id).subscribe(data =>  this.users=data);
          console.log(data.designation);
          localStorage.setItem('role',data.designation);
          localStorage.setItem('branch',data.branch);
          localStorage.setItem(data.designation,'true');
          this.des=data.designation;
          if(data.designation =="admin"){
            this.router.navigate([this.returnUrl1]);
          }
          else if(data.designation=="mainadmin") {
            this.router.navigate([this.returnUrl4]);
          }
          else if(data.designation=="client")
          {
            this.router.navigate([this.returnUrl3]);
          }
          else
          {
            this.router.navigate([this.returnUrl2]);
          }
        }
      });
    }
  }

}

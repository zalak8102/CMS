import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../../auth.service";

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  constructor( private authService: AuthService) { }

  ngOnInit(): void {
    this.authService.logout();
    console.log("log");
  }

}

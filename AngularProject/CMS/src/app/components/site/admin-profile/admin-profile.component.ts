import { Component, OnInit } from '@angular/core';
import { ProfileService } from 'src/app/profile.service';

@Component({
  selector: 'app-admin-profile',
  templateUrl: './admin-profile.component.html',
  styleUrls: ['./admin-profile.component.css']
})
export class AdminProfileComponent implements OnInit {
  public loggedid=localStorage.getItem("id");
  public loggedrole=localStorage.getItem('role');

  public profile = [];
  constructor(private _profileService: ProfileService) { }

  ngOnInit(): void {
    this._profileService.getprofile().subscribe(data => this.profile=data);
  }

}

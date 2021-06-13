import { Component, OnInit } from '@angular/core';
import { BranchService } from 'src/app/branch.service';

@Component({
  selector: 'app-staff-branch',
  templateUrl: './staff-branch.component.html',
  styleUrls: ['./staff-branch.component.css']
})
export class StaffBranchComponent implements OnInit {

  public branchs = [];
  constructor(private _branchService: BranchService) { }

  ngOnInit(): void {
    this._branchService.getBranchs().subscribe(data => this.branchs=data);
  }

}

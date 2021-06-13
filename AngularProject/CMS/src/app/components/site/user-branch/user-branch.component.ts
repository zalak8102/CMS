import { Component, OnInit } from '@angular/core';
import { BranchService } from 'src/app/branch.service';

@Component({
  selector: 'app-user-branch',
  templateUrl: './user-branch.component.html',
  styleUrls: ['./user-branch.component.css']
})
export class UserBranchComponent implements OnInit {

  public branchs = [];
  constructor(private _branchService: BranchService) { }

  ngOnInit(): void {
    this._branchService.getBranchs().subscribe(data => this.branchs=data);
  }

}

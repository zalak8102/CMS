import { Component, OnInit } from '@angular/core';
import { BranchService } from 'src/app/branch.service';

@Component({
  selector: 'app-admin-branch',
  templateUrl: './admin-branch.component.html',
  styleUrls: ['./admin-branch.component.css']
})
export class AdminBranchComponent implements OnInit {

  public branchs = [];
  constructor(private _branchService: BranchService) { }

  ngOnInit(): void {
    this._branchService.getBranchs().subscribe(data => this.branchs=data);
  }

}

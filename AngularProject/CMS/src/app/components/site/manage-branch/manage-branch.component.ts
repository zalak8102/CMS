import { Component, OnInit } from '@angular/core';
import { BranchService } from 'src/app/branch.service';

@Component({
  selector: 'app-manage-branch',
  templateUrl: './manage-branch.component.html',
  styleUrls: ['./manage-branch.component.css']
})
export class ManageBranchComponent implements OnInit {

  public branchs = [];
  constructor(private _branchService: BranchService) { }

  ngOnInit(): void {
    this._branchService.getBranchs().subscribe(data => this.branchs=data);
  }

}

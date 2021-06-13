import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StaffBranchComponent } from './staff-branch.component';

describe('StaffBranchComponent', () => {
  let component: StaffBranchComponent;
  let fixture: ComponentFixture<StaffBranchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StaffBranchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StaffBranchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

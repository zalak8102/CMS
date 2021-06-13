import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserBranchComponent } from './user-branch.component';

describe('UserBranchComponent', () => {
  let component: UserBranchComponent;
  let fixture: ComponentFixture<UserBranchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserBranchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserBranchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

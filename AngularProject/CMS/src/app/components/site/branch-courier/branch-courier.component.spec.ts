import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BranchCourierComponent } from './branch-courier.component';

describe('BranchCourierComponent', () => {
  let component: BranchCourierComponent;
  let fixture: ComponentFixture<BranchCourierComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BranchCourierComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BranchCourierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

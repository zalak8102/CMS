import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StaffCourierComponent } from './staff-courier.component';

describe('StaffCourierComponent', () => {
  let component: StaffCourierComponent;
  let fixture: ComponentFixture<StaffCourierComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StaffCourierComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StaffCourierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

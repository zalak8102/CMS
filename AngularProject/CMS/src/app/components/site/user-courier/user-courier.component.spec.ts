import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserCourierComponent } from './user-courier.component';

describe('UserCourierComponent', () => {
  let component: UserCourierComponent;
  let fixture: ComponentFixture<UserCourierComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserCourierComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserCourierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

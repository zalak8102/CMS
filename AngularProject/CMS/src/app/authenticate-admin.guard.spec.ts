import { TestBed } from '@angular/core/testing';

import { AuthenticateAdminGuard } from './authenticate-admin.guard';

describe('AuthenticateAdminGuard', () => {
  let guard: AuthenticateAdminGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AuthenticateAdminGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});

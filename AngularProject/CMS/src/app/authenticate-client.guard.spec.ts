import { TestBed } from '@angular/core/testing';

import { AuthenticateClientGuard } from './authenticate-client.guard';

describe('AuthenticateClientGuard', () => {
  let guard: AuthenticateClientGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AuthenticateClientGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { AuthenticateTrasportGuard } from './authenticate-trasport.guard';

describe('AuthenticateTrasportGuard', () => {
  let guard: AuthenticateTrasportGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AuthenticateTrasportGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});

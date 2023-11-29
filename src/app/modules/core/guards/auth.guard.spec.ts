import { TestBed } from '@angular/core/testing';

import { AuthenticationService } from '../services/auth/auth.service';
import { authGuard } from './auth.guard';

const setup = (domainServiceMock: unknown) => {
  TestBed.configureTestingModule({
    providers: [
      authGuard,
      { provide: AuthenticationService, useValue: domainServiceMock },
    ],
  });

  return TestBed.runInInjectionContext(authGuard);
};

it('should allow to continue', () => {
  const mockDomainService: unknown = {
    isLoggedIn: () => true,
  };
  const guard = setup(mockDomainService);

  guard.subscribe((p: unknown) => {
    expect(p).toBe(true);
  });
});

it('should NOT allow to continue', () => {
  const mockDomainService: unknown = {
    isLoggedIn: () => false,
  };
  const guard = setup(mockDomainService);

  guard.subscribe((p: unknown) => {
    expect(p).toBe(false);
  });
});

import { inject } from '@angular/core';
import { AuthenticationService } from '../services/auth/auth.service';
import { Observable, of } from 'rxjs';

export const authGuard = (): Observable<boolean> => {
  const authService = inject(AuthenticationService);

  if (!authService.isLoggedIn()) {
    return of(false);
  }

  return of(true);
};

import { inject } from '@angular/core';
import { AuthenticationService } from '../services/auth/auth.service';

export const authGuard = () => {
  const authService = inject(AuthenticationService);

  if (!authService.isLoggedIn()) {
    return false;
  }

  return true;
};

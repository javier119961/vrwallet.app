import { CanActivateFn } from '@angular/router';

export const authenticatedGuard: CanActivateFn = (route, state) => {
  return true;
};

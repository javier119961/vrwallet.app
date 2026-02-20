import { CanActivateFn } from '@angular/router';

export const noAuthenticatedGuard: CanActivateFn = (route, state) => {
  return true;
};

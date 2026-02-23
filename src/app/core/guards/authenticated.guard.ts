import { CanActivateFn } from '@angular/router';
import {inject} from "@angular/core";
import {TokenService} from "../../feature/auth/services/token.service";

export const authenticatedGuard: CanActivateFn = (route, state) => {
  
  const tokenService = inject(TokenService);
  
  if (tokenService.IsValid()){
    return true;
  }
  
  return false;
};

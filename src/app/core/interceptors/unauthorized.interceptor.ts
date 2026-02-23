import {HttpErrorResponse, HttpInterceptorFn} from '@angular/common/http';
import {catchError, throwError} from "rxjs";
import {inject} from "@angular/core";
import {AuthService} from "../../feature/auth/services/auth.service";

export const unauthorizedInterceptor: HttpInterceptorFn = (req, next) => {
  return next(req)
    .pipe(
      catchError((error : HttpErrorResponse) => {
        if (error.status === 401) inject(AuthService).logout();
        return throwError(() => error);
      })
    )
};

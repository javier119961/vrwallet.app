import {computed, inject, Injectable, signal} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "@env/environment";
import {LoginResponse} from "../interfaces/login-response.interface";
import {catchError, map, Observable, of} from "rxjs";
import {TokenService} from "./token.service";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private http = inject(HttpClient);
  private tokenService = inject(TokenService);
  
  private readonly baseUrl = environment.baseUrl;
  
  public login(username: string, password: string) : Observable<boolean> {
    return this.http.post<LoginResponse>(`${this.baseUrl}/login`, {
      username, password
    }).pipe(
      map(({accessToken,refreshToken})=>this.handleAuthSuccess(accessToken,refreshToken)),
      catchError(()=> this.handleAuthError())
    )
  }
  
  public handleAuthSuccess(token: string, refreshToken: string){
    this.tokenService.saveTokens(token, refreshToken);
    return true;
  }
  
  public handleAuthError() : Observable<boolean>{
    this.logout();
    return of(false)    
  }
  
  public logout(){
    this.tokenService.clearTokens();
    return of(true);
  }
  
}

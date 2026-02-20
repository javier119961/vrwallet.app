import {computed, Injectable, signal} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TokenService {
  private _token = signal<string|null>(null)

  token = computed(() => this._token());
  
  public saveTokens(token: string, refreshToken: string){
    sessionStorage.setItem('accessToken', token);
    sessionStorage.setItem('refreshToken', refreshToken);
    this._token.set(token);
  }
  
  public clearTokens(){
    sessionStorage.removeItem('accessToken');
    sessionStorage.removeItem('refreshToken');
    this._token.set(null);
  }
}

import {inject, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "@env/environment";
import {Account} from "../interfaces/account.interface";
import {map, Observable} from "rxjs";
import {ApiResponse} from "@core/Interfaces/api-response.interface";

@Injectable({
  providedIn: 'root',
})
export class AccountService {
  private http = inject(HttpClient);
  private readonly baseUrl = environment.baseUrl;
  
  public getAccounts(): Observable<Account[]> {
    return this.http.get<ApiResponse<Account[]>>(`${this.baseUrl}/account`)
      .pipe(map(res => res.data));
  }
  
}

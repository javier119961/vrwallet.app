import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '@env/environment';
import {Income, Expense, Transfer} from '../interfaces/deposit.interface';
import { Transaction } from '../interfaces/transaction.interface';
import { ApiResponse } from '@core/Interfaces/api-response.interface';
import {map, Observable} from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TransactionService {
  private http = inject(HttpClient);
  private readonly baseUrl = environment.baseUrl;

  public add(deposit: Income) {
    return this.http
      .post<
        ApiResponse<Transaction>
      >(`${this.baseUrl}/transactions/deposit`, deposit)
      .pipe(map((res) => res.data));
  }
  
  public expense(expense:Expense) : Observable<Transaction>{
    return this.http.post<ApiResponse<Transaction>>
    (`${this.baseUrl}/transactions/withdraw`,expense)
      .pipe(map((res) => res.data))
  }
  
  public transfer(transfer:Transfer){
    return this.http.post<ApiResponse<Transaction>>
    (`${this.baseUrl}/transactions/transfer`,transfer)
      .pipe(map((res) => res.data))
  }
}

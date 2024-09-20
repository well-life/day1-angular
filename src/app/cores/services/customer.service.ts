import { Injectable } from '@angular/core';
import { ICustomer } from '../interfaces/i-customer';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment.development';
import { IPagination } from '../interfaces/i-pagination';
import { Pagination } from '../models/pagination';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  private _customers: IPagination<ICustomer[]> = new Pagination<ICustomer[]>();;
  

  constructor(private http: HttpClient) { }

  public all(page: number = 1, query: string=""): Observable<IPagination<ICustomer[]>> {
    return this.http.get<IPagination<ICustomer[]>>(`${environment.BASE_URL}/customer?customer.name=${query}&_page=${page}&_per_page=5`);
  }
  

  get customers(): IPagination<ICustomer[]> {
    return this._customers;
  }

  set customers(data: IPagination<ICustomer[]>) {
    this._customers = data;
  }

}

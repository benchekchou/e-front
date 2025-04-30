import { Customer } from './../model/customer.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  backendHost:string="http://localhost:8085";

  constructor(private http:HttpClient) { }

  public getCustomur():Observable<Array<Customer>>{
    return this.http.get<Array<Customer>>(this.backendHost+"/customers")
  }

  public searchCustomur(kw:string):Observable<Array<Customer>>{
    return this.http.get<Array<Customer>>(this.backendHost+"/customers/search?kw="+kw)
  }
  public saveCustomure(customer:Customer):Observable<Customer>{
    return this.http.post<Customer>(this.backendHost+"/customers",customer);
  }
  public deleteCustomure(customer:Customer){
    return this.http.delete(this.backendHost+"/customers/"+customer.id);
  }
}

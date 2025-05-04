import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AccountDetail } from '../model/account.model';

@Injectable({
  providedIn: 'root'
})
export class AccountsService {
  backendHost:string="http://localhost:8085";


  constructor(private http:HttpClient) { }

  public getAccount(accountId:String,page:number,size:number):Observable<AccountDetail>{
    return this.http.get<AccountDetail>(this.backendHost+"/accounts/"+accountId+"/pageOperations?page="+page+"&size="+size);
  }
}

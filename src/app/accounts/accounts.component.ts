import { AccountsService } from './../services/accounts.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { AccountDetail } from '../model/account.model';

@Component({
  selector: 'app-accounts',
  standalone: false,
  templateUrl: './accounts.component.html',
  styleUrl: './accounts.component.css'
})
export class AccountsComponent  implements OnInit{

  accountFormGroup!:FormGroup;
  currentPage:number=0;
  pageSize:number=5;
  accountObservable!:Observable<AccountDetail>

constructor(private fb:FormBuilder,private accountsService:AccountsService){}

  ngOnInit(): void {
    this.accountFormGroup=this.fb.group({
      accountId:this.fb.control('')

    });
  }

  handleSearchAccount() {
let accountId:string=this.accountFormGroup.value.accountId;
this.accountObservable=this.accountsService.getAccount(accountId,this.currentPage,this.pageSize)

    }



}

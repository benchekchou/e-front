import { Customer } from './../model/customer.model';
import { catchError, Observable, throwError } from 'rxjs';
import { CustomerService } from './../services/customer.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-customers',
  standalone: false,
  templateUrl: './customers.component.html',
  styleUrl: './customers.component.css'
})
export class CustomersComponent implements OnInit {
[x: string]: any;
  customers!: Observable<Array<Customer>>;
  errorMassage!:string;
  searchFromGroup!:FormGroup;


  constructor(private customerService: CustomerService,private fb:FormBuilder) {}

  ngOnInit(): void {
    this.searchFromGroup=this.fb.group({
      kw:this.fb.control("")

    });
    this.customers=this.customerService.getCustomur().pipe(
      catchError(err=>{
        this.errorMassage=err.message;
        return throwError(err);

      })
    )
  }
  handleSearchFromGroup(){
    let kw=this.searchFromGroup?.value.kw;
    this.customers=this.customerService.searchCustomur(kw).pipe(
      catchError(err=>{
        this.errorMassage=err.message;
        return throwError(err);
      })
    );
  }
  handleDeleteCustumer(customer:Customer){
    this.customerService.deleteCustomure(customer).subscribe({
      next:(resp)=>{
        this.handleSearchFromGroup();
      },
      error:err=>{
        console.log(err)
      }

    })
  }
}

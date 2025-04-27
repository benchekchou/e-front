import { catchError, Observable, throwError } from 'rxjs';
import { CustomerService } from './../services/customer.service';
import { Component, OnInit } from '@angular/core';
import { Customer } from '../model/customer.model';

@Component({
  selector: 'app-customers',
  standalone: false,
  templateUrl: './customers.component.html',
  styleUrl: './customers.component.css'
})
export class CustomersComponent implements OnInit {
  customers!: Observable<Array<Customer>>;
  errorMassage!:string;


  constructor(private customerService: CustomerService) {}

  ngOnInit(): void {
    this.customers=this.customerService.getCustomur().pipe(
      catchError(err=>{
        this.errorMassage=err.message;
        return throwError(err);
        
      })
    )
  }
}

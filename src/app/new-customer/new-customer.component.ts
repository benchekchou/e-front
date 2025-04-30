import { Customer } from './../model/customer.model';
import { CustomerService } from './../services/customer.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-new-customer',
  standalone: false,
  templateUrl: './new-customer.component.html',
  styleUrl: './new-customer.component.css'
})
export class NewCustomerComponent implements OnInit {

  newCustomerFormGroup!:FormGroup;
  constructor(private fb :FormBuilder,private customerService:CustomerService){


  }
  ngOnInit(): void {
    this.newCustomerFormGroup=this.fb.group({
      name:this.fb.control(null,[Validators.required,Validators.minLength(4)]),
      email:this.fb.control(null,[Validators.required, Validators.email])
    })
  }
  handleSaveCustomer() {
     let customer=this.newCustomerFormGroup.value;
     this.customerService.saveCustomure(customer).subscribe({
      next:data=>{
        alert("Customer has been successfully saved!")
        this.newCustomerFormGroup.reset()
      },
      error:err=>{
        console.log(err)
      }
     })

    }


}

import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Customer } from '../../models/customer';
import { CustomerService } from '../customer.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'customer-form',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './customer-form.component.html',
  styleUrl: './customer-form.component.css'
})
export class CustomerFormComponent {
  //interface with two-way data binding
  customer: Customer = {
    id: 0,
    customerName: '',
    customerAddress: '',
    customerEmail: '',
    customerPhone: '',
    customerCity: '',
    customerState: '',
    customerRegion: '',
    customerPostalCode: ''
  }

  errorMessage: string = "";

  constructor(private customerService: CustomerService, private router: Router){}

  //submit method
  onSubmit(): void {
    console.log(this.customer)
    //logic to create new customer
    //use di customerService and subscribe
    this.customerService.createCustomer(this.customer)
      .subscribe({
        next: (response) => {
          this.router.navigate(["/"])
        },
        error: (err) => {
          console.log(err);
          this.errorMessage = `Error ocurred: ${err.status}`; // - ${err.message}
        }
      });
        
        //(result) => console.log(result))
  }
  
  //example onClick method
  /* onClick(): void{
    console.log(this.customer.customerAddress)
    alert.bind(window);
    this.customer.customerAddress = "777 Belair St";
    alert('button clicked: ' + this.customer.customerAddress)
  } */
}

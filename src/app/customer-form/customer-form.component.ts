import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Customer } from '../../models/customer';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'customer-form',
  standalone: true,
  imports: [FormsModule],
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

  constructor(private customerService: CustomerService){}

  //submit method
  onSubmit(): void {
    console.log(this.customer)
    //logic to create new customer
    //use di customerService and subscribe
    this.customerService.createCustomer(this.customer)
      .subscribe((result) => console.log(result))
  }
  
  //example onClick method
  /* onClick(): void{
    console.log(this.customer.customerAddress)
    alert.bind(window);
    this.customer.customerAddress = "777 Belair St";
    alert('button clicked: ' + this.customer.customerAddress)
  } */
}

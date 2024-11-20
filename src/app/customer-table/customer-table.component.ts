import { Component, OnInit } from '@angular/core';
//add
import { Customer } from '../../models/customer';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'customer-table',
  standalone: true,
  imports: [],
  templateUrl: './customer-table.component.html',
  styleUrl: './customer-table.component.css'
})
export class CustomerTableComponent {
  //property
  customers: Customer[] = [];
  //constructor
  constructor(private customerService: CustomerService){}
  //OnInit
  ngOnInit(){
    this.customerService.getCustomers().subscribe((data: Customer[]) => {
      this.customers = data;
      console.log(data);
    });
  }
}

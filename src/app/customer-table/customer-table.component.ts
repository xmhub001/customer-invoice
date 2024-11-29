import { Component, OnInit } from '@angular/core';
//add
import { Customer } from '../../models/customer';
import { CustomerService } from '../customer.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'customer-table',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './customer-table.component.html',
  styleUrl: './customer-table.component.css'
})
export class CustomerTableComponent {
  //property
  customers: Customer[] = [];
  //constructor
  constructor(private customerService: CustomerService, private router: Router){}
  //OnInit
  ngOnInit(){
    this.customerService.getCustomers().subscribe((data: Customer[]) => {
      this.customers = data;
      console.log(data);
    });
  }

  deleteCustomer(id: number): void{
    this.customerService.deleteCustomer(id).subscribe({
      next: () => {
        //response
        //filter for the one we want to delete
        this.customers = this.customers.filter(c => c.id !== id);
      },
      error: (err) => {
        console.error('Error deleting customer', err);
      }
    })
  }

  editCustomer(id: number): void{
    //if in edit mode then load entity data
    this.router.navigate(['/edit', id]);
  }
}

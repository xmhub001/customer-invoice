import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Customer } from '../../models/customer';
import { CustomerService } from '../customer.service';
import { Router, ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'customer-form',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './customer-form.component.html',
  styleUrl: './customer-form.component.css'
})
export class CustomerFormComponent implements OnInit{
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

  isEditing: boolean = false;

  errorMessage: string = "";

  //added route and ActivatedRoute for Edit
  constructor(
    private customerService: CustomerService, 
    private router: Router,
    private route: ActivatedRoute
  ){}

  //OnInit
  ngOnInit(): void {
    //Edit Intermediate step to make sure everything is working correctly
    // If paramMap has id then set isEditing to true.
    this.route.paramMap.subscribe((result) => {
      const id = result.get('id'); //'3'

      if(id){
        //editing
        this.isEditing = true;

        //convert to Number
        this.customerService.getCustomerById(Number(id)).subscribe({
          next: (result) => this.customer = result,
          error: (err) => this.errorMessage = `Error occurred (${err.status})` //console.error("Error loading customer", err)
        })
      }
        //console.log("Is Editing")
      // }else {
      //   //create new
      //   //console.log("Is Create New")
      // }
    }); //console.log(result)
  }
  //submit method
  onSubmit(): void {
    if(this.isEditing){
      //Edit
      this.customerService.editCustomerById(this.customer)
      .subscribe({
        next: (response) => {
          this.router.navigate(["/"])
        },
        error: (err) => {
          console.log(err);
          this.errorMessage = `Error occurred during Edit: ${err.status}`; // - ${err.message}
        }
      });

    }else{
      //Create
      //logic to create new customer
      //use di customerService and subscribe
      this.customerService.createCustomer(this.customer)
      .subscribe({
        next: (response) => {
          this.router.navigate(["/"])
        },
        error: (err) => {
          console.log(err);
          this.errorMessage = `Error occurred during Create: ${err.status}`; // - ${err.message}
        }
      });

    }
    console.log(this.customer)
    
        
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

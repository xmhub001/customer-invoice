import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { Observable } from 'rxjs';
import { Customer } from '../models/customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  //property
  private apiUrl = `${environment.apiUrl}/customer`
  
  //constructor
  constructor(private http: HttpClient) { }

  //observable
  getCustomers(): Observable<Customer[]>{
    return this.http.get<Customer[]>(this.apiUrl);
  }

  //for Edit to populate form
  getCustomerById(id:number): Observable<Customer>{
    return this.http.get<Customer>(`${this.apiUrl}/${id}`);
  }

  //for Edit by Id
  editCustomerById(customer: Customer): Observable<Customer>{
    return this.http.put<Customer>(`${this.apiUrl}/${customer.id}`, customer);
  }
  


  createCustomer(customer: Customer): Observable<Customer>{
    return this.http.post<Customer>(this.apiUrl, customer)
  }

  deleteCustomer(id: number): Observable<void>{
    //this delete matches the API delete attribute signature (takes /id)
    return this.http.delete<void>(`${this.apiUrl}/${id}`)
  }
}

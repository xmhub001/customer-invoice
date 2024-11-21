import { Component } from '@angular/core';
import { RouterOutlet, RouterModule } from '@angular/router';
import { CustomerTableComponent } from './customer-table/customer-table.component';
import { CustomerFormComponent } from "./customer-form/customer-form.component";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterModule, CustomerTableComponent, CustomerFormComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'customer-invoice';
}

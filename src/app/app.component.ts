import { Component } from '@angular/core';
import { RouterOutlet, RouterModule } from '@angular/router';
import { CustomerTableComponent } from './customer-table/customer-table.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CustomerTableComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'customer-invoice';
}

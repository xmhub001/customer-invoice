import { Routes } from '@angular/router';
import { CustomerTableComponent } from './customer-table/customer-table.component';
import { CustomerFormComponent } from './customer-form/customer-form.component';

//paths: '', 'create'
export const routes: Routes = [
    {path: '', component: CustomerTableComponent},
    {path: 'create', component:CustomerFormComponent},
    {path: 'edit/:id', component:CustomerFormComponent},
    {path: 'customers', redirectTo: '', pathMatch:'full'}
];

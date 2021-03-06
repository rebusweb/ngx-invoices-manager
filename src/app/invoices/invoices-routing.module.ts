import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InvoicesComponent } from './components/invoices/invoices.component';
import { InvoiceFormComponent } from './components/invoice-form/invoice-form.component';
import { InvoiceListComponent } from './components/invoice-list/invoice-list.component';

const routes: Routes = [
  {
    path: '',
    component: InvoicesComponent,
    children: [
      {
        path: '',
        redirectTo: 'list'
      },
      {
        path: 'list',
        component: InvoiceListComponent
      },
      {
        path: 'form',
        component: InvoiceFormComponent
      },
      {
        path: 'form/:index',
        component: InvoiceFormComponent
      },
      {
        path: 'form/:index/:copy',
        component: InvoiceFormComponent
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InvoicesRoutingModule { }

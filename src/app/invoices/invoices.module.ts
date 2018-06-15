import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InvoicesRoutingModule } from './invoices-routing.module';
import { InvoicesComponent } from './components/invoices/invoices.component';
import { SharedModule } from '../shared/shared.module';
import { InvoiceFormComponent } from './components/invoice-form/invoice-form.component';
import { InvoiceListComponent } from './components/invoice-list/invoice-list.component';

@NgModule({
  imports: [
    CommonModule,
    InvoicesRoutingModule,
    SharedModule,
  ],
  declarations: [
    InvoicesComponent,
    InvoiceFormComponent,
    InvoiceListComponent
  ]
})
export class InvoicesModule { }

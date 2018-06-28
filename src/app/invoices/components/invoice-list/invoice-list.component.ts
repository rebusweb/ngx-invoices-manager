import { Component, OnInit } from '@angular/core';
import { InvoiceService } from '../../services/invoice.service';
import { Invoice } from '../../../shared/models/invoice';

@Component({
  selector: 'app-invoice-list',
  templateUrl: './invoice-list.component.html',
  styleUrls: ['./invoice-list.component.sass']
})
export class InvoiceListComponent implements OnInit {
  invoices: Invoice[];
  displayedColumns = ['date', 'number', 'to', 'from', 'operations'];

  constructor(private invoiceService: InvoiceService) { }

  ngOnInit() {
    this.getItems();
  }

  delete(index: number): void {
    this.invoiceService.remove(index).subscribe(
      (result) => {
        this.getItems();
      }
    );
  }

  getItems() {
    this.invoiceService.fetch().subscribe(
      (value) => {
        this.invoices = value;
      }
    );
  }

}

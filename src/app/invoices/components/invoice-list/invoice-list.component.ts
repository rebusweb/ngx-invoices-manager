import { Component, OnInit } from '@angular/core';
import { InvoiceService } from '../../services/invoice.service';
import { Invoice } from '../../../shared/models/invoice';
import { MatDialog, MatDialogRef } from '@angular/material';
import { ConfirmDialogComponent } from '../../../shared/components/confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'app-invoice-list',
  templateUrl: './invoice-list.component.html',
  styleUrls: ['./invoice-list.component.sass']
})
export class InvoiceListComponent implements OnInit {
  invoices: Invoice[];
  displayedColumns = ['date', 'number', 'to', 'from', 'operations'];

  constructor(private invoiceService: InvoiceService, public dialog: MatDialog) { }

  ngOnInit() {
    this.getItems();
  }

  delete(index: number): void {
    const dialogRef = this.dialog.open(ConfirmDialogComponent);
    dialogRef.afterClosed().subscribe(result => {
      console.log({result});
      if (result === 'asdaqwe') {
        this.invoiceService.remove(index).subscribe(
          (data) => {
            this.getItems();
          }
        );
      }
    });
  }

  getItems() {
    this.invoiceService.fetch().subscribe(
      (value) => {
        this.invoices = value;
      }
    );
  }

}

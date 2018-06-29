import { Component, OnInit } from '@angular/core';
import { InvoiceService } from '../../services/invoice.service';
import { Invoice } from '../../../shared/models/invoice';
import { MatDialog, MatDialogRef } from '@angular/material';
import { ConfirmDialogComponent } from '../../../shared/components/confirm-dialog/confirm-dialog.component';
import { TableConfig, TableOperationEmit } from '../../../shared/models/table-config';
import { Router } from '@angular/router';

@Component({
  selector: 'app-invoice-list',
  templateUrl: './invoice-list.component.html',
  styleUrls: ['./invoice-list.component.sass']
})
export class InvoiceListComponent implements OnInit {
  invoices: Invoice[];
  displayedColumns = ['date', 'number', 'to', 'from', 'operations'];
  operations = {
    edit: 'edit',
    copy: 'copy',
    delete: 'delete',
  };
  tableConfig: TableConfig = {
    columns: [
      {
        name: 'Date',
        prop: 'date',
        format: 'date',
      },
      {
        name: 'Number',
        prop: 'number',
      },
      {
        name: 'To',
        prop: 'buyer.name',
      },
      {
        name: 'From',
        prop: 'supplier.name',
      },
    ],
    operations: [
      {
        id: this.operations.edit,
        name: 'Edit',
        icon: 'edit'
      },
      {
        id: this.operations.copy,
        name: 'Copy',
        icon: 'add_to_photos'
      },
      {
        id: this.operations.delete,
        name: 'Delete',
        icon: 'delete'
      },
    ]
  };

  constructor(private invoiceService: InvoiceService,
    public dialog: MatDialog,
    private router: Router) { }

  ngOnInit() {
    this.getItems();
  }

  delete(index: number): void {
    const dialogRef = this.dialog.open(ConfirmDialogComponent);
    dialogRef.afterClosed().subscribe(result => {
      if (result === 'asdaqwe') {
        this.invoiceService.remove(index).subscribe(
          (data) => {
            this.getItems();
          }
        );
      }
    });
  }

  edit(index: number) {
    this.router.navigate([`/invoices/form/${index}`]);
  }

  copy(index: number) {
    this.router.navigate([`/invoices/form/${index}/copy`]);
  }

  getItems(): void {
    this.invoiceService.fetch().subscribe(
      (value) => {
        this.invoices = value;
      }
    );
  }

  onOperation({ operation, index }: TableOperationEmit): void {
    switch (operation) {
      case this.operations.edit:
        this.edit(index);
        break;
      case this.operations.copy:
        this.copy(index);
        break;
      case this.operations.delete:
        this.delete(index);
        break;
    }
  }

}

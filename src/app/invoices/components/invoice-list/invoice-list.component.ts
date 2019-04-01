import { Component, OnInit } from '@angular/core';
import { InvoiceService } from '../../services/invoice.service';
import { Invoice } from '../../models/invoice';
import { MatDialog, MatDialogRef } from '@angular/material';
import { ConfirmDialogComponent } from '../../../shared/components/confirm-dialog/confirm-dialog.component';
import { TableConfig, TableOperationEmit } from '../../../shared/models/table-config';
import { Router } from '@angular/router';
import { Contact } from 'src/app/contacts/models/contact';
import { ContactService } from 'src/app/contacts/services/contact.service';

@Component({
  selector: 'app-invoice-list',
  templateUrl: './invoice-list.component.html',
  styleUrls: ['./invoice-list.component.sass']
})
export class InvoiceListComponent implements OnInit {
  invoices: Invoice[];
  contacts: Contact[];
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
        prop: 'buyerName',
      },
      {
        name: 'From',
        prop: 'supplierName',
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
    private router: Router,
    private contactService: ContactService) { }

  ngOnInit() {
    this.getContacts();
    this.getItems();
  }

  delete(index: number): void {
    const dialogRef = this.dialog.open(ConfirmDialogComponent);
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
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
        this.invoices = value.map(invoice => {
          invoice.supplierName = this.contacts[invoice.supplier].name;
          invoice.buyerName = this.contacts[invoice.buyer].name;
          return invoice;
        });
      }
    );
  }

  getContacts(): void {
    this.contactService.fetch().subscribe(
      (value) => {
        this.contacts = value;
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

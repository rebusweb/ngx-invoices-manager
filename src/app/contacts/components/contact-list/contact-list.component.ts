import { Component, OnInit } from '@angular/core';
import { ContactService } from '../../services/contact.service';
import { Contact } from '../../models/contact';
import { MatDialog, MatDialogRef } from '@angular/material';
import { ConfirmDialogComponent } from '../../../shared/components/confirm-dialog/confirm-dialog.component';
import { TableConfig, TableOperationEmit } from '../../../shared/models/table-config';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.sass']
})
export class ContactListComponent implements OnInit {
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
        name: 'Name',
        prop: 'name',
      },
      {
        name: 'City',
        prop: 'city',
      },
      {
        name: 'NIP',
        prop: 'nip',
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

  constructor(private contactService: ContactService,
    public dialog: MatDialog,
    private router: Router) { }

  ngOnInit() {
    this.getItems();
  }

  delete(index: number): void {
    const dialogRef = this.dialog.open(ConfirmDialogComponent);
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.contactService.remove(index).subscribe(
          (data) => {
            this.getItems();
          }
        );
      }
    });
  }

  edit(index: number) {
    this.router.navigate([`/contacts/form/${index}`]);
  }

  copy(index: number) {
    this.router.navigate([`/contacts/form/${index}/copy`]);
  }

  getItems(): void {
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

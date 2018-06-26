import { Component, OnInit } from '@angular/core';
import { Invoice } from '../../../shared/models/invoice';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { ServerService } from '../../../core/services/server.service';
import { LocalStorage } from '@ngx-pwa/local-storage';

@Component({
  selector: 'app-invoice-form',
  templateUrl: './invoice-form.component.html',
  styleUrls: ['./invoice-form.component.sass']
})
export class InvoiceFormComponent implements OnInit {

  invoiceForm: FormGroup;

  constructor(private fb: FormBuilder, private server: ServerService, private localStorage: LocalStorage) { }

  ngOnInit() {
    this.invoiceForm = this.fb.group({
      number: ['', Validators.required],
      date: ['', Validators.required],
      supplier: this.fb.group({
        name: ['', Validators.required],
        street: ['', Validators.required],
        postCode: ['', Validators.required],
        city: ['', Validators.required],
        nip: ['', Validators.required],
      }),
      buyer: this.fb.group({
        name: ['', Validators.required],
        street: ['', Validators.required],
        postCode: ['', Validators.required],
        city: ['', Validators.required],
        nip: ['', Validators.required],
      }),
      products: this.fb.array([ this.createProduct() ]),
      paymentType: ['', Validators.required],
      paymentTime: ['', Validators.required],
    });
  }

  get products(): FormArray {
    return this.invoiceForm.get('products') as FormArray;
  }

  createProduct(): FormGroup {
    return this.fb.group({
      name: ['', Validators.required],
      count: ['', Validators.required],
      price: ['', Validators.required],
    });
  }

  addProduct(): void {
    this.products.push(this.createProduct());
  }

  submit({ value, valid }: { value: Invoice, valid: boolean }): void {
    console.log(value, valid);
    this.server.post('invoices', value).subscribe(
      (response) => console.log('OK', response),
      (error) => console.log('ERROR', error),
    );
  }

}

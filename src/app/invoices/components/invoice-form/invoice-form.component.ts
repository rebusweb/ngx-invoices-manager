import { Component, OnInit } from '@angular/core';
import { Invoice } from '../../../shared/models/invoice';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-invoice-form',
  templateUrl: './invoice-form.component.html',
  styleUrls: ['./invoice-form.component.sass']
})
export class InvoiceFormComponent implements OnInit {

  invoice: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.invoice = this.fb.group({
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
      products: this.fb.group({
        name: ['', Validators.required],
        count: ['', Validators.required],
        price: ['', Validators.required],
      }),
      paymentType: ['', Validators.required],
      paymentTime: ['', Validators.required],
    });
  }

  submit({ value, valid }: { value: Invoice, valid: boolean }) {
    console.log(value, valid);
  }

}

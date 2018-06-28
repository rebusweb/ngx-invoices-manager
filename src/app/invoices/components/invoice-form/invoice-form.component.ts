import { Component, OnInit } from '@angular/core';
import { Invoice } from '../../../shared/models/invoice';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { InvoiceService } from '../../services/invoice.service';
import { CustomValidators } from '../../../shared/validators/custom-validators';
import { PAYMENT_TYPES } from 'src/app/shared/config/payment-types';

@Component({
  selector: 'app-invoice-form',
  templateUrl: './invoice-form.component.html',
  styleUrls: ['./invoice-form.component.sass']
})
export class InvoiceFormComponent implements OnInit {

  invoiceForm: FormGroup;
  paymentTypes = PAYMENT_TYPES;

  constructor(private fb: FormBuilder, private invoiceService: InvoiceService) { }

  ngOnInit() {
    this.invoiceForm = this.fb.group({
      number: ['', [ Validators.required ]],
      date: ['', [ Validators.required ]],
      supplier: this.fb.group({
        name: ['', [ Validators.required ]],
        street: ['', [ Validators.required ]],
        postCode: ['', [ Validators.required, CustomValidators.postCode ]],
        city: ['', [ Validators.required ]],
        nip: ['', [ Validators.required, CustomValidators.nipNumber ]],
      }),
      buyer: this.fb.group({
        name: ['', [ Validators.required ]],
        street: ['', [ Validators.required ]],
        postCode: ['', [ Validators.required, CustomValidators.postCode ]],
        city: ['', [ Validators.required ]],
        nip: ['', [ Validators.required, CustomValidators.nipNumber ]],
      }),
      products: this.fb.array([ this.createProduct() ]),
      paymentType: ['', [ Validators.required ]],
      paymentTime: ['', [ Validators.required ]],
    });
  }

  get products(): FormArray {
    return this.invoiceForm.get('products') as FormArray;
  }

  createProduct(): FormGroup {
    return this.fb.group({
      name: ['', [ Validators.required ]],
      count: ['', [ Validators.required, CustomValidators.integer ]],
      price: ['', [ Validators.required, CustomValidators.number ]],
    });
  }

  addProduct(): void {
    this.products.push(this.createProduct());
  }

  submit({ value, valid }: { value: Invoice, valid: boolean }): void {
    if (!valid) {
      return;
    }
    this.invoiceService.add(value).subscribe(
      (response) => {
        console.log('OK', response);
        this.invoiceForm.reset();
      },
      (error) => {
        console.log('ERROR', error);
      },
    );
  }

}

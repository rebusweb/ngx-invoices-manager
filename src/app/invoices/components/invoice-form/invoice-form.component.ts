import { Component, OnInit } from '@angular/core';
import { Invoice } from '../../../shared/models/invoice';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { InvoiceService } from '../../services/invoice.service';
import { CustomValidators } from '../../../shared/validators/custom-validators';
import { PAYMENT_TYPES } from 'src/app/shared/config/payment-types';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-invoice-form',
  templateUrl: './invoice-form.component.html',
  styleUrls: ['./invoice-form.component.sass']
})
export class InvoiceFormComponent implements OnInit {
  title = 'Add new invoice';
  invoiceForm: FormGroup;
  paymentTypes = PAYMENT_TYPES;
  index: number;
  copy = false;

  constructor(private fb: FormBuilder,
    private invoiceService: InvoiceService,
    private route: ActivatedRoute,
    private router: Router) {
  }

  ngOnInit() {
    this.invoiceForm = this.fb.group({
      number: ['', [Validators.required]],
      date: ['', [Validators.required]],
      supplier: this.fb.group({
        name: ['', [Validators.required]],
        street: ['', [Validators.required]],
        postCode: ['', [Validators.required, CustomValidators.postCode]],
        city: ['', [Validators.required]],
        nip: ['', [Validators.required, CustomValidators.nipNumber]],
      }),
      buyer: this.fb.group({
        name: ['', [Validators.required]],
        street: ['', [Validators.required]],
        postCode: ['', [Validators.required, CustomValidators.postCode]],
        city: ['', [Validators.required]],
        nip: ['', [Validators.required, CustomValidators.nipNumber]],
      }),
      products: this.fb.array([this.createProduct()]),
      paymentType: ['', [Validators.required]],
      paymentTime: ['', [Validators.required]],
    });

    this.route.params.subscribe(params => {
      if (params.index) {
        this.index = params.index;
        this.invoiceService.fetch(this.index).subscribe(
          (value) => {
            if (value && value[0]) {
              const invoice = value[0];
              for (let i = 1; i <= invoice.products.length - 1; i++) {
                this.products.push(this.createProduct());
              }
              this.invoiceForm.setValue(invoice);
              this.title = 'Edit invoice';
            }
          }
        );
      }
      this.copy = !!params.copy;
    });
  }

  get products(): FormArray {
    return this.invoiceForm.get('products') as FormArray;
  }

  createProduct(): FormGroup {
    return this.fb.group({
      name: ['', [Validators.required]],
      count: ['', [Validators.required, CustomValidators.integer]],
      price: ['', [Validators.required, CustomValidators.number]],
    });
  }

  addProduct(): void {
    this.products.push(this.createProduct());
  }

  submit({ value, valid }: { value: Invoice, valid: boolean }): void {
    console.log(valid, value);
    if (!valid) {
      return;
    }
    if (!this.index || this.copy) {
      this.invoiceService.add(value).subscribe(
        (response) => {
          console.log('OK', response);
          this.router.navigate(['/invoices/list']);
        }
      );
    } else {
      this.invoiceService.edit(this.index, value).subscribe(
        (response) => {
          console.log('OK', response);
          this.router.navigate(['/invoices/list']);
        }
      );
    }
  }

}

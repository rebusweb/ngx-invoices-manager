import { Component, OnInit } from '@angular/core';
import { Contact } from '../../../shared/models/contact';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { ContactService } from '../../services/contact.service';
import { CustomValidators } from '../../../shared/validators/custom-validators';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.sass']
})
export class ContactFormComponent implements OnInit {
  title = 'Add new contact';
  contactForm: FormGroup;
  index: number;
  copy = false;

  constructor(private fb: FormBuilder,
    private contactService: ContactService,
    private route: ActivatedRoute,
    private router: Router) {
  }

  ngOnInit() {
    this.contactForm = this.fb.group({
      name: ['', [Validators.required]],
      street: ['', [Validators.required]],
      postCode: ['', [Validators.required, CustomValidators.postCode]],
      city: ['', [Validators.required]],
      nip: ['', [Validators.required, CustomValidators.nipNumber]],
    });

    this.route.params.subscribe(params => {
      if (params.index) {
        this.index = params.index;
        this.contactService.fetch(this.index).subscribe(
          (value) => {
            if (value && value[0]) {
              const contact = value[0];
              this.contactForm.setValue(contact);
              this.title = 'Edit contact';
            }
          }
        );
      }
      this.copy = !!params.copy;
    });
  }

  submit({ value, valid }: { value: Contact, valid: boolean }): void {
    console.log(valid, value);
    if (!valid) {
      return;
    }
    if (!this.index || this.copy) {
      this.contactService.add(value).subscribe(
        (response) => {
          console.log('OK', response);
          this.router.navigate(['/contacts/list']);
        }
      );
    } else {
      this.contactService.edit(this.index, value).subscribe(
        (response) => {
          console.log('OK', response);
          this.router.navigate(['/contacts/list']);
        }
      );
    }
  }

}

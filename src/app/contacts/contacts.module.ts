import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactsRoutingModule } from './contacts-routing.module';
import { ContactsComponent } from './components/contacts/contacts.component';
import { SharedModule } from '../shared/shared.module';
import { ContactListComponent } from './components/contact-list/contact-list.component';
import { ContactFormComponent } from './components/contact-form/contact-form.component';
import { AppMaterialModule } from '../app.material.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    ContactsRoutingModule,
    SharedModule,
    AppMaterialModule,
    ReactiveFormsModule
  ],
  declarations: [
    ContactsComponent,
    ContactListComponent,
    ContactFormComponent
  ]
})
export class ContactsModule { }

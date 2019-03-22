import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactsComponent } from './components/contacts/contacts.component';
import { ContactListComponent } from './components/contact-list/contact-list.component';
import { ContactFormComponent } from './components/contact-form/contact-form.component';

const routes: Routes = [
  {
    path: '',
    component: ContactsComponent,
    children: [
      {
        path: '',
        redirectTo: 'list'
      },
      {
        path: 'list',
        component: ContactListComponent
      },
      {
        path: 'form',
        component: ContactFormComponent
      },
      {
        path: 'form/:index',
        component: ContactFormComponent
      },
      {
        path: 'form/:index/:copy',
        component: ContactFormComponent
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContactsRoutingModule { }

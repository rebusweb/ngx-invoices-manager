import { Component, OnInit } from '@angular/core';
import { NavLink } from 'src/app/shared/models/nav-link';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.sass']
})
export class ContactsComponent implements OnInit {

  navigation: NavLink[] = [
    {
      name: 'List',
      url: './list'
    },
    {
      name: 'Add new',
      url: './form'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';
import { NavLink } from '../../../shared/models/nav-link';

@Component({
  selector: 'app-invoices',
  templateUrl: './invoices.component.html',
  styleUrls: ['./invoices.component.sass']
})
export class InvoicesComponent implements OnInit {

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

import { Component, OnInit } from '@angular/core';
import { NavLink } from '../../models/nav-link';
import { navigation } from '../../settings/navigation';

@Component({
  selector: 'app-head',
  templateUrl: './head.component.html',
  styleUrls: ['./head.component.sass']
})
export class HeadComponent implements OnInit {
  mainNavigation: NavLink[] = navigation;

  constructor() { }

  ngOnInit() {
  }

}

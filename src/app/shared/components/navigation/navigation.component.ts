import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../auth/services/auth.service';
import { Router } from '@angular/router';
import { NavLink } from './navLink';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.sass']
})
export class NavigationComponent implements OnInit {
  currentUrl: string;
  navLinks: NavLink[] = [
    {
      name: 'Workspace',
      url: '/workspace',
    },
    {
      name: 'Invoices',
      url: '/invoices',
    },
    {
      name: 'Contacts',
      url: '/contacts',
    }
  ];

  constructor(private authService: AuthService,
    private router: Router) { }

  ngOnInit() {
    this.currentUrl = this.router.url;
    this.navLinks.forEach((value) => {
      value.active = value.url === this.currentUrl;
    });
  }

  logout(event) {
    event.preventDefault();
    this.authService.logout();
    this.router.navigate(['/login']);
  }

}

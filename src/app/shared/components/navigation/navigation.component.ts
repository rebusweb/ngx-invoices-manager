import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { AuthService } from '../../../auth/services/auth.service';
import { Router, ActivatedRoute, NavigationStart, NavigationEnd } from '@angular/router';
import { NavLink } from '../../models/nav-link';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.sass']
})

export class NavigationComponent implements OnInit, OnDestroy {
  @Input() links: NavLink[];
  @Input() logoutLink = false;
  currentUrl: string;
  routerSubscribtion = new Subscription();

  constructor(private authService: AuthService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.refreshActiveLink();
    this.routerSubscribtion = this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.refreshActiveLink();
      }
    });
  }

  ngOnDestroy(): void {
    this.routerSubscribtion.unsubscribe();
  }

  refreshActiveLink() {
    this.currentUrl = window.location.pathname;
    this.links.forEach((value) => {
      const url = value.url.replace('.', '');
      value.active = this.currentUrl.endsWith(url) || this.currentUrl.startsWith(url);
    });
  }

  logout(event) {
    event.preventDefault();
    this.authService.logout();
    this.router.navigate(['/login']);
  }

}

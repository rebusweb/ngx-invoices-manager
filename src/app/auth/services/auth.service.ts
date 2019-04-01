import { Injectable } from '@angular/core';
import { User } from '../../user/models/user';
import { UserLogin } from '../../user/models/user-login';
import { of, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user: User = null;

  constructor() {
    this.user = this.getFromStorage();
  }

  get loggedIn(): boolean {
    return !!this.user;
  }

  login(login: UserLogin): Observable<User> {
    if (login.username !== 'test@test.pl' && login.password !== 'test') {
      return of(null);
    }
    this.user = {
      email: 'test@test.pl',
      name: 'test',
    };
    this.setInStorage();
    return of(this.user);
  }

  logout(): void {
    this.user = null;
    this.setInStorage();
  }

  setInStorage(): void {
    sessionStorage.setItem('user', JSON.stringify(this.user));
  }

  getFromStorage(): User {
    return sessionStorage.getItem('user') ? JSON.parse(sessionStorage.getItem('user')) : null;
  }
}

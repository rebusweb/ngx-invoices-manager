import { Injectable } from '@angular/core';
import { User } from '../../shared/models/user';
import { UserLogin } from '../../shared/models/user-login';
import { of, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user: User = null;

  constructor() { }

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
    return of(this.user);
  }

  logout(): void {
    this.user = null;
  }
}

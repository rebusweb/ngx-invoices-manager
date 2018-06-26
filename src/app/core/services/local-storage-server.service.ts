import { Injectable } from '@angular/core';
import { LocalStorage } from '@ngx-pwa/local-storage';
import { Observable } from 'rxjs';
import { Server } from '../../shared/interfaces/server';
import { map, switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageServerService implements Server {
  prefix = 'ngx-invoices-';

  constructor(private localStorage: LocalStorage) {}

  get(url: string): Observable<any> {
    console.log('LS get');
    return this.localStorage.getItem(this.prefix + url);
  }

  put(url: string, value: any): Observable<any> {
    console.log('LS put', url, value);
    return this.get(url)
      .pipe(
        switchMap((data) => {
          console.log('Existing: ', data);
          const dataStore = Array.isArray(data) ? [ ...data, value ] : [ value ];
          console.log('Store: ', dataStore);
          return this.localStorage.setItem(this.prefix + url, dataStore);
        })
      );
  }

  post(url: string, value: any): Observable<any> {
    console.log('LS post', url, value);
    return this.put(this.prefix + url, value);
  }

  patch(url: string, value: any): Observable<any> {
    console.log('LS patch', url, value);
    return this.localStorage.setItem(this.prefix + url,
      {
        ...this.get(this.prefix + url),
        value
      });
  }

  delete(url: string): Observable<any> {
    console.log('LS delet', url);
    return this.localStorage.removeItem(this.prefix + url);
  }
}

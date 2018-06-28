import { Injectable } from '@angular/core';
import { LocalStorage } from '@ngx-pwa/local-storage';
import { Observable, throwError } from 'rxjs';
import { Server } from '../../shared/interfaces/server';
import { map, switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageServerService implements Server {
  prefix = 'ngx-invoices-';

  constructor(private localStorage: LocalStorage) { }

  get(url: string): Observable<any> {
    console.log('LS get');
    const { url: urlPart, index } = this.getIndex(url);
    return this.localStorage.getItem(this.prefix + urlPart)
      .pipe(
        map((value) => {
          return index && value ? [value[index]] : value;
        })
      );
  }

  put(url: string, value: any): Observable<any> {
    console.log('LS put', url, value);
    const { url: urlPart, index } = this.getIndex(url);
    return this.get(urlPart)
      .pipe(
        switchMap((data) => {
          if (index) {
            data[index] = value;
          } else {
            data = Array.isArray(data) ? [...data, value] : [value];
          }
          return this.localStorage.setItem(this.prefix + urlPart, data);
        })
      );
  }

  post(url: string, value: any): Observable<any> {
    console.log('LS post', url, value);
    return this.put(url, value);
  }

  patch(url: string, value: any): Observable<any> {
    console.log('LS patch', url, value);
    const { url: urlPart, index } = this.getIndex(url);
    if (!index) {
      throwError('No index provided!');
    }
    return this.get(urlPart)
      .pipe(
        switchMap((data) => {
          data[index] = {
            ...data[index],
            ...value
          };
          return this.localStorage.setItem(this.prefix + urlPart, data);
        })
      );
  }

  delete(url: string): Observable<any> {
    console.log('LS delete', url);
    const { url: urlPart, index } = this.getIndex(url);
    if (!index) {
      throwError('No index provided!');
    }
    console.log({urlPart}, {index});
    return this.get(urlPart)
      .pipe(
        switchMap((data) => {
          data.splice(index, 1);
          return this.localStorage.setItem(this.prefix + urlPart, data);
        })
      );
  }

  getIndex(url: string): { url: string, index: string } {
    if (!url.includes('/')) {
      return {
        url,
        index: null
      };
    }

    const [urlPart, index] = url.split('/');
    return {
      url: urlPart,
      index
    };
  }
}

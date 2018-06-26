import { Injectable } from '@angular/core';
import { LocalStorage } from '@ngx-pwa/local-storage';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Server } from '../../shared/interfaces/server';

@Injectable({
  providedIn: 'root'
})
export class HttpServerService implements Server {

  constructor(private http: HttpClient) {}

  get(url: string): Observable<any> {
    return this.http.get(url);
  }

  put(url: string, value: any): Observable<any> {
    return this.http.put(url, value);
  }

  post(url: string, value: any): Observable<any> {
    return this.http.post(url, value);
  }

  patch(url: string, value: any): Observable<any> {
    return this.http.patch(url, value);
  }

  delete(url: string): Observable<any> {
    return this.http.delete(url);
  }
}

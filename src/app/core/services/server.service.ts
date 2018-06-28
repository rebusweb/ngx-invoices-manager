import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { LocalStorageServerService } from './local-storage-server.service';
import { HttpServerService } from './http-server.service';
import { Server } from '../../shared/interfaces/server';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServerService implements Server {
  serverService = null;

  constructor(private localStorageServer: LocalStorageServerService, private httpServer: HttpServerService) {
    switch (environment.server) {
      case 'localStorage':
        this.serverService = this.localStorageServer;
        break;
      default:
        this.serverService = this.httpServer;
    }
  }

  get(url: string): Observable<any> {
    return this.serverService.get(url);
  }

  post(url: string, value: any): Observable<any> {
    return this.serverService.post(url, value);
  }

  put(url: string, value: any): Observable<any> {
    return this.serverService.put(url, value);
  }

  patch(url: string, value: any): Observable<any> {
    return this.serverService.patch(url, value);
  }

  delete(url: string): Observable<any> {
    return this.serverService.delete(url);
  }
}

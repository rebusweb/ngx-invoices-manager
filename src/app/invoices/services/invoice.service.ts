import { Injectable } from '@angular/core';
import { ServerService } from '../../core/services/server.service';
import { DataService } from '../../shared/interfaces/data-service';
import { Observable } from 'rxjs';
import { Invoice } from '../models/invoice';

@Injectable({
  providedIn: 'root'
})
export class InvoiceService implements DataService {

  constructor(private serverService: ServerService) { }

  fetch(id?: number): Observable<Invoice[]> {
    const url = id ? `invoices/${id}` : 'invoices';
    return this.serverService.get(url);
  }

  add(data: Invoice): Observable<Invoice> {
    return this.serverService.post(`invoices`, data);
  }

  remove(id: number): Observable<any> {
    return this.serverService.delete(`invoices/${id}`);
  }

  edit(id: number, data: Invoice): Observable<Invoice> {
    return this.serverService.patch(`invoices/${id}`, data);
  }

}

import { Injectable } from '@angular/core';
import { ServerService } from '../../core/services/server.service';
import { DataService } from '../../shared/interfaces/data-service';
import { Observable } from 'rxjs';
import { Contact } from '../models/contact';

@Injectable({
  providedIn: 'root'
})
export class ContactService implements DataService {

  constructor(private serverService: ServerService) { }

  fetch(id?: number): Observable<Contact[]> {
    const url = id ? `contacts/${id}` : 'contacts';
    return this.serverService.get(url);
  }

  add(data: Contact): Observable<Contact> {
    return this.serverService.post(`contacts`, data);
  }

  remove(id: number): Observable<any> {
    return this.serverService.delete(`contacts/${id}`);
  }

  edit(id: number, data: Contact): Observable<Contact> {
    return this.serverService.patch(`contacts/${id}`, data);
  }

}

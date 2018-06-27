import { Observable } from 'rxjs';

export interface DataService {
  fetch(id?: number): Observable<any>;
  add(data: any): Observable<any>;
  remove(id: number): Observable<any>;
  edit(id: number, data: any): Observable<any>;
}

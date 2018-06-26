import { Observable } from 'rxjs';

export interface Server {
  get(url: string): Observable<any>;
  post(url: string, value: any): Observable<any>;
  put(url: string, value: any): Observable<any>;
  patch(url: string, value: any): Observable<any>;
  delete(url: string): Observable<any>;
}

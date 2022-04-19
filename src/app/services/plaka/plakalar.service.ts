import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from '../api/api.service';

@Injectable({
  providedIn: 'root'
})
export class PlakalarService {

  constructor(private api: ApiService) { }
  plakalar(): Observable<any> {
    return this.api.post('plakalar', {});
  }
  plakaekle(body: any): Observable<any> {
    return this.api.post('plakaekle',body);
  }
  plakaGuncelle(body: any): Observable<any> {
    return this.api.post('plakaGuncelle',body);
  }
  plakaSilme(id: string): Observable<any> {
    return this.api.post('plakaSilme/'+id, {});
  }
}

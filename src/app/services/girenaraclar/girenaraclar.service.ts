import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from '../api/api.service';

@Injectable({
  providedIn: 'root'
})
export class GirenaraclarService {

  constructor(private api: ApiService) { }
  girenAraclar(): Observable<any> {
    return this.api.post('girenAraclar', {});
  }
  girenAraclarSil(id: string): Observable<any> {
    return this.api.post('girilenAraciSil/'+id, {});
  }
}

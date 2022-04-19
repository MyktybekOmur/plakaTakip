import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from '../api/api.service';

@Injectable({
  providedIn: 'root'
})
export class CikanaraclarService {

  constructor(private api: ApiService) { }
  cikanAraclar(): Observable<any> {
    return this.api.post('cikanAraclar', {});
  }
  cikanAraciSil(id: string): Observable<any> {
    return this.api.post('cikanAraciSil/'+id, {});
  }

}

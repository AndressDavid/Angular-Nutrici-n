import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DoctoresService {
  token: string = '6663c0b0-868f-49d7-9cfe-3ed3e86996f5';
  url: string = 'http://localhost:8085/shaio/';

  constructor(private http: HttpClient) {}
  obtenerListadoDoctores(): Observable<any> {
    return this.http.get(`${this.url}doctores/list?token=${this.token}`);
  }
}

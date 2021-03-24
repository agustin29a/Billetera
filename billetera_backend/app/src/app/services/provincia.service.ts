import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Provincia } from '../models/provincia.model';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ProvinciaService {

  url = 'https://apis.datos.gob.ar/georef/api/provincias';

  constructor(private http: HttpClient) {
    console.log('Persona service is running');
  }

  getProvincias(): Observable<Provincia> {
    // tslint:disable-next-line: prefer-const
    let header = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.get<Provincia>(this.url);

  }
}

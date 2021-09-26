import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Disponibilidad } from '../models/disponibilidad.model';
import { Observable } from 'rxjs';

const  baseURL = "http://localhost:8090/rest/disponibilidad"

@Injectable({
  providedIn: 'root'
})
export class DisponibilidadService {

  constructor(
    private http:HttpClient
  ) { }

  registraDisponibilidad (data:Disponibilidad): Observable<any>{
    return this.http.post(baseURL,data);
  }

}

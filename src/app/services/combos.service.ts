import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Usuario } from '../models/usuario.model';
import { Observable } from 'rxjs';
import { Ciclo } from '../models/ciclo.model';


const  baseURL = "http://localhost:8090/rest/combos"

@Injectable({
  providedIn: 'root'
})
export class CombosService {

  constructor(
    private http:HttpClient
  ) { }

  comboUsuario (): Observable<Usuario[]>{
    return this.http.get<Usuario[]>(baseURL+"/usuario");
  }

  comboCiclo (): Observable<Ciclo[]>{
    return this.http.get<Ciclo[]>(baseURL+"/ciclo");
  }

}

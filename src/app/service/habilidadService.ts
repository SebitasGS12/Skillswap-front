import { Injectable } from "@angular/core";
import { Datos } from "../constants/datos";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Amistades } from "../models/amistades";
import { Habilidad } from "../models/habilidad";


@Injectable({
    providedIn:'root'
})
export class HabilidadesService {
    private baseUrl = Datos.API_URL+"Habilidad" ;
    constructor(private http: HttpClient){}

    public listar():Observable<Habilidad[]>{
        return this.http.get<Habilidad[]>(this.baseUrl);
    }


  public registrar(habilidad: Habilidad): Observable<any> {
    return this.http.post<any>(this.baseUrl, habilidad);
  }
  
  public buscar(id : string): Observable<Habilidad> {
    return this.http.get<Habilidad>(this.baseUrl + `/${id}`);
  }
  public listarPorCategoria(idCategoria : string): Observable<Habilidad[]> {
    return this.http.get<Habilidad[]>(this.baseUrl +'/categoria' + `/${idCategoria}`);
  }

}

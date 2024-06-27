import { Injectable } from "@angular/core";
import { Datos } from "../constants/datos";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { CategoriaHabilidad } from "../models/categoria-habilidad";


@Injectable({
    providedIn:'root'
})
export class CategoriaHabilidadService {
    private baseUrl = Datos.API_URL+"CategoriaHabilidad" ;
    constructor(private http: HttpClient){}

    public listar():Observable<CategoriaHabilidad[]>{
        return this.http.get<CategoriaHabilidad[]>(this.baseUrl);
    }


    public registrar(categoriaHabilidad: CategoriaHabilidad): Observable<any> {
    return this.http.post<any>(this.baseUrl, categoriaHabilidad);
    }

    public buscar(id : string): Observable<CategoriaHabilidad> {
    return this.http.get<CategoriaHabilidad>(this.baseUrl + `/${id}`);
    }
}
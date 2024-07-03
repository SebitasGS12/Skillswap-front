import { Injectable } from "@angular/core";
import { Datos } from "../constants/datos";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { CategoriaHabilidad } from "../models/categoria-habilidad";
import { CategoriaForos } from "../models/categoria-foros";
import { Foro } from "../models/Foro";


@Injectable({
    providedIn:'root'
})
export class ForosService {
    private baseUrl = Datos.API_URL+"Foros" ;
    constructor(private http: HttpClient){}

    public listar():Observable<Foro[]>{
        return this.http.get<Foro[]>(this.baseUrl);
    }

    public registrar(categoriaHabilidad: Foro): Observable<Foro> {
    return this.http.post<any>(this.baseUrl, categoriaHabilidad);
    }

    public buscar(id : number): Observable<Foro> {
    return this.http.get<Foro>(this.baseUrl + `/${id}`);
    }
}
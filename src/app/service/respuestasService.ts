import { Injectable } from "@angular/core";
import { Datos } from "../constants/datos";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { CategoriaHabilidad } from "../models/categoria-habilidad";
import { CategoriaForos } from "../models/categoria-foros";
import { Foro } from "../models/Foro";
import { Discuciones } from "../models/discuciones";
import { Respuestas } from "../models/respuestas";


@Injectable({
    providedIn:'root'
})
export class RespuestasService {
    private baseUrl = Datos.API_URL+"Respuestas" ;
    constructor(private http: HttpClient){}

    public listar():Observable<Respuestas[]>{
        return this.http.get<Respuestas[]>(this.baseUrl);
    }

    public registrar(respuesta: Respuestas): Observable<Respuestas> {
    return this.http.post<any>(this.baseUrl, respuesta);
    }

    public buscar(id : number): Observable<Respuestas> {
    return this.http.get<Respuestas>(this.baseUrl + `/${id}`);
    }
}
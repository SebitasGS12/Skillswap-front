import { Injectable } from "@angular/core";
import { Datos } from "../constants/datos";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { CategoriaHabilidad } from "../models/categoria-habilidad";
import { CategoriaForos } from "../models/categoria-foros";
import { Foro } from "../models/Foro";
import { Discuciones } from "../models/discuciones";


@Injectable({
    providedIn:'root'
})
export class DiscucionesService {
    private baseUrl = Datos.API_URL+"Discusiones" ;
    constructor(private http: HttpClient){}

    public listar():Observable<Discuciones[]>{
        return this.http.get<Discuciones[]>(this.baseUrl);
    }

    public registrar(discuciones: Discuciones): Observable<Discuciones> {
    return this.http.post<any>(this.baseUrl, discuciones);
    }

    public buscar(id : number): Observable<Discuciones> {
    return this.http.get<Discuciones>(this.baseUrl + `/${id}`);
    }
}
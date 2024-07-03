import { Injectable } from "@angular/core";
import { Datos } from "../constants/datos";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Amistades } from "../models/amistades";
import { Usuario } from "../models/usuario";
import { Sesion } from "../models/sesion";


@Injectable({
    providedIn:'root'
})
export class SesionService {
    private baseUrl = Datos.API_URL+"Sesion" ;
    constructor(private http: HttpClient){}

    public obtenerSesion(): Observable<Sesion> {
        return this.http.get<any>(this.baseUrl+'/actual');
    }

}

import { Injectable } from "@angular/core";
import { Datos } from "../constants/datos";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Amistades } from "../models/amistades";
import { Usuario } from "../models/usuario";


@Injectable({
    providedIn:'root'
})
export class NegocioService {
    private baseUrl = Datos.API_URL+"Negocio" ;
    constructor(private http: HttpClient){}

    public inciarSesion(usuario: Usuario): Observable<Usuario> {
        return this.http.post<any>(this.baseUrl+'/sesionon', usuario);
    }
    public cerrarSesion(usuario: Usuario): Observable<Usuario> {
        return this.http.post<any>(this.baseUrl+'/sesionoff', usuario);
    }

    public registrarNuevaCuenta(usuario: Usuario): Observable<Usuario> {
        return this.http.post<any>(this.baseUrl+'/registro', usuario);
    }

    


}

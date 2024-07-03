import { Injectable } from "@angular/core";
import { Datos } from "../constants/datos";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Amistades } from "../models/amistades";
import { Usuario } from "../models/usuario";
import { Sesion } from "../models/sesion";
import { Perfil } from "../models/perfil";


@Injectable({
    providedIn:'root'
})
export class PerfilService {
    private baseUrl = Datos.API_URL+"Perfil" ;
    constructor(private http: HttpClient){}

    public obtenerPerfilByUsuario(usuarioid:number): Observable<Perfil> {
        return this.http.get<any>(this.baseUrl+'/usuario/'+usuarioid);
    }
    public registrar(perfil: Perfil): Observable<Perfil> {
        return this.http.post<any>(this.baseUrl, perfil);
    }

    public listar():Observable<Perfil[]>{
        return this.http.get<Perfil[]>(this.baseUrl);
    }


}

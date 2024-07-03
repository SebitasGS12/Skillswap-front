import { Injectable } from "@angular/core";
import { Datos } from "../constants/datos";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Amistades } from "../models/amistades";
import { Usuario } from "../models/usuario";
import { Sesion } from "../models/sesion";
import { Perfil } from "../models/perfil";
import {  Notificacion } from "../models/notificacion";


@Injectable({
    providedIn:'root'
})
export class NotificacionesService {
    private baseUrl = Datos.API_URL+"Notificaciones" ;
    constructor(private http: HttpClient){}

    public obtenerNotificacionesByUsuario(usuarioid:number): Observable<Notificacion[]> {
        return this.http.get<any>(this.baseUrl+'/usuario/'+usuarioid);
    }

    public registrar(notificacion: Notificacion): Observable<Notificacion> {
        return this.http.post<any>(this.baseUrl, notificacion);
      }



}

import { Injectable } from "@angular/core";
import { Datos } from "../constants/datos";
import { HttpClient } from "@angular/common/http";
import { Observable, retry } from "rxjs";
import { Amistades } from "../models/amistades";


@Injectable({
    providedIn:'root'
})
export class AmistadesService {
    private baseUrl = Datos.API_URL+"Amistades" ;
    constructor(private http: HttpClient){}

    public listar():Observable<Amistades[]>{
        return this.http.get<Amistades[]>(this.baseUrl);
    }
    public registrar(amistad: Amistades): Observable<Amistades> {
        return this.http.post<any>(this.baseUrl, amistad);
    }

    public existeAmistad(usuarioId:number,amigoId:number):Observable<boolean>{
        return this.http.get<any>(`${this.baseUrl}/existeAmistad?usuarioId=${usuarioId}&amigoId=${amigoId}`);
    }

    public obtenerAmistadesByUsuario(usuarioid:number): Observable<Amistades[]> {
        return this.http.get<any>(this.baseUrl+'/usuario/'+usuarioid);
    }
    public obtenerAmistadesByUsuarioAndAmigo(usuarioid:number,amigo:number): Observable<Amistades[]> {
        return this.http.get<any>(`${this.baseUrl}/devolverAmistad?usuarioId=${usuarioid}&amigoId=${amigo}`);
    }

}

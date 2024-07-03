import { Injectable } from "@angular/core";
import { Datos } from "../constants/datos";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Usuario } from "../models/usuario";


@Injectable({
    providedIn:'root'
})
export class UsuarioService {
    private baseUrl = Datos.API_URL+"Usuario" ;
    constructor(private http: HttpClient){}

    public listar():Observable<Usuario[]>{
        return this.http.get<Usuario[]>(this.baseUrl);
    }


    public registrar(usuario: Usuario): Observable<any> {
        return this.http.post<any>(this.baseUrl, usuario);
    }
    public buscar(id : string): Observable<Usuario> {
        return this.http.get<Usuario>(this.baseUrl + `/${id}`);
    }
}

import { Injectable } from "@angular/core";
import { Datos } from "../constants/datos";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { CategoriaHabilidad } from "../models/categoria-habilidad";
import { CategoriaForos } from "../models/categoria-foros";


@Injectable({
    providedIn:'root'
})
export class CategoriaForosService {
    private baseUrl = Datos.API_URL+"CategoriaForos" ;
    constructor(private http: HttpClient){}

    public listar():Observable<CategoriaForos[]>{
        return this.http.get<CategoriaForos[]>(this.baseUrl);
    }

    public registrar(categoriaHabilidad: CategoriaForos): Observable<CategoriaForos> {
    return this.http.post<any>(this.baseUrl, categoriaHabilidad);
    }

    public buscar(id : string): Observable<CategoriaForos> {
    return this.http.get<CategoriaForos>(this.baseUrl + `/${id}`);
    }
}
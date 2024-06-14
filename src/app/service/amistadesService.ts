import { Injectable } from "@angular/core";
import { Datos } from "../constants/datos";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
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


}

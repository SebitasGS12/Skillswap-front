import { Injectable } from "@angular/core";
import { Datos } from "../constants/datos";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { ChatUsuario } from "../models/chat-usuario";


@Injectable({
    providedIn:'root'
})
export class ChatUsuarioService {
    private baseUrl = Datos.API_URL+"ChatUsuario" ;
    constructor(private http: HttpClient){}

    public obtenerChatUsuarioByUsuario(usuarioid:number): Observable<ChatUsuario> {
        return this.http.get<any>(this.baseUrl+'/usuario/'+usuarioid);
    }

}

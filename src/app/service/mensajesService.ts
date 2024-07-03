import { Injectable } from "@angular/core";
import { Datos } from "../constants/datos";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { ChatUsuario } from "../models/chat-usuario";
import { Mensajes } from "../models/mensajes";


@Injectable({
    providedIn:'root'
})
export class MensajesService {
    private baseUrl = Datos.API_URL+"Mensajes" ;
    constructor(private http: HttpClient){}

    public obtenerMensajesByChat(chatId:number): Observable<Mensajes[]> {
        return this.http.get<any>(this.baseUrl+'/chat/'+chatId);
    }

    public enviarMensaje(mensaje: Mensajes): Observable<any> {
        return this.http.post<any>(this.baseUrl, mensaje);
        }

}

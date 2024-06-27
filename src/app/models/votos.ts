import { Respuestas } from "./respuestas";
import { Usuario } from "./usuario";

export class Votos {
    
    votoId!:number;
    tipoVoto!:boolean;
    fechaVoto!:Date;
    obj_Respuesta!:Respuestas;
    obj_Usuario!:Usuario;
}
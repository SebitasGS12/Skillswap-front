import { Discuciones } from "./discuciones";
import { Usuario } from "./usuario";

export interface Respuestas{
    respuestasId:number | null;
    contenido:string;
    fechaCreacion:Date;
    obj_Usuario:Usuario;
    obj_Discuciones:Discuciones|undefined;
}
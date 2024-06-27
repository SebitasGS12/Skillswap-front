import { Discuciones } from "./discuciones";
import { Usuario } from "./usuario";

export class Respuestas{
    respuestasId!:number;
    contenido!:string;
    fechaCreacion!:Date;
    obj_Usuario!:Usuario;
    obj_Discuciones!:Discuciones;
}
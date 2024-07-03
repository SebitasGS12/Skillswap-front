import { Foro } from "./Foro";
import { Usuario } from "./usuario";

export class Discuciones {
    
    discusionesId!:number|null;
    titulo!:string;
    descripcion!:string;
    fechaCreacion!:Date;
    obj_Usuario!:Usuario
    obj_Foro!:Foro
}
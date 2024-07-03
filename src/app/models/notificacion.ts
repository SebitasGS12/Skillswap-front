import { Imagen } from "./imagen";
import { Usuario } from "./usuario";

export class  Notificacion {
    
    notificacionesId!:number|null;
    titulo!:string;
    contenido!:string;
    fechaCreacion!:Date;
    leido!:boolean;
    obj_imagenId!:Imagen|null;
    usuario!:Usuario;
    amigo!:Usuario;

}
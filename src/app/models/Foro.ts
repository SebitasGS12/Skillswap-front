import { CategoriaForos } from "./categoria-foros";
import { Usuario } from "./usuario";

export class Foro {
    
    foroId!:number|null;
    titulo!:string;
    descripcion!:string;
    fechaCreacion!:Date;
    obj_Usuario!:Usuario;
    obj_CategoriaForo!:CategoriaForos;
}
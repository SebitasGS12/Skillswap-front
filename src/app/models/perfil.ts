import { Imagen } from "./imagen";
import { Usuario } from "./usuario";

export class Perfil {
    perfilID!:number;
    nombre!:string;
    apellido!:string;
    telefono!:string;
    fechaNacimiento!:Date;
    obj_imagenPerfilId!:Imagen;
    obj_imagenCabeceraId!:Imagen;
    biografia!:String;
    usuario!:Usuario;

    constructor() {}  

}
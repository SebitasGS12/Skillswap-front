import { CategoriaHabilidad } from "./categoria-habilidad";
import { Perfil } from "./perfil";

export class Habilidad {
    habilidadId!:number;
    nombre!:string;
    descripcion!:string;
    obj_CategoriaHabilidad!:CategoriaHabilidad;
    obj_Perfil!:Perfil;
}
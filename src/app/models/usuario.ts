import { TipoUsuario } from "./tipo-usuario";

export class Usuario {
    usuarioId!:number;
    correo!:string;
    contrasenia!:string;
    fechaRegistro!:string;
    estado!:boolean;
    obj_tipoUsuario!:TipoUsuario;
}

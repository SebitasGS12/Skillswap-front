import { Usuario } from "./usuario";

export class Amistades {
    amistadID!:number|null;
    fechaAmistad!:Date;
    amistadAceptada!:boolean;
    usuario!:Usuario;
    amigo!:Usuario;

}

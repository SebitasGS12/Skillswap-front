import { Chat } from "./chat"
import { Usuario } from "./usuario"

export class Mensajes{
        mensajeId!: number | null;
        contenido!: string;
        fechaEnvio!: Date;
        obj_Usuario!: Usuario;
        chat!: Chat;

        
}
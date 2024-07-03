import { Chat } from "./chat";
import { Usuario } from "./usuario";

export class ChatUsuario{

    chatUsuarioId!:number;
    usuario!:Usuario;
    amigo!:Usuario;
    chat!:Chat;
}
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { AsideComponent } from "../aside/aside.component";
import { HeaderComponent } from "../header/header.component";
import { Sesion } from '../../models/sesion';
import { Amistades } from '../../models/amistades';
import { SesionService } from '../../service/sesionService';
import { AmistadesService } from '../../service/amistadesService';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { PerfilService } from '../../service/perfilService';
import { Perfil } from '../../models/perfil';
import { ChatUsuario } from '../../models/chat-usuario';
import { ChatUsuarioService } from '../../service/chatUsuarioService';
import { Chat } from '../../models/chat';
import { Mensajes } from '../../models/mensajes';
import { MensajesService } from '../../service/mensajesService';
import { FormsModule } from '@angular/forms';
import { Usuario } from '../../models/usuario';

@Component({
    selector: 'app-skillchat',
    standalone: true,
    templateUrl: './skillchat.component.html',
    styleUrls: ['./skillchat.component.css'],
    imports: [AsideComponent, HeaderComponent, CommonModule, FormsModule]
})
export class SkillchatComponent implements OnInit {
    @ViewChild('messageContent') private messageContent!: ElementRef;

    sesion!: Sesion;
    amistades: Amistades[] = [];
    amistadPerfilSelected!: Perfil;
    chatActual!: Chat;
    chat_usuario!: ChatUsuario;
    mensajesFromChat: Mensajes[] = [];
    perfiles: { [key: number]: Perfil } = {};

    constructor(
        private sesionService: SesionService,
        private amistadesService: AmistadesService,
        private perfilService: PerfilService,
        private chatUsuarioService: ChatUsuarioService,
        private mensajesService: MensajesService,
        private router: Router
    ) { }

    ngOnInit(): void {
        // Obtener la sesión
        this.sesionService.obtenerSesion().subscribe((response) => {
            console.log(response);
            this.sesion = response;
            if (this.sesion) {
                this.amistadesService.obtenerAmistadesByUsuario(this.sesion.obj_Usuario.usuarioId).subscribe((response) => {
                    console.log(response);
                    this.amistades = response;
                    this.cargarPerfiles();
                });
            }
        });
    }

    cargarPerfiles(): void {
        this.amistades.forEach(amistad => {
            this.perfilService.obtenerPerfilByUsuario(amistad.amigo.usuarioId).subscribe(
                perfil => {
                    this.perfiles[amistad.amigo.usuarioId] = perfil;
                }
            );
        });
    }

    abrirChat(usuarioid: number) {
        this.chatUsuarioService.obtenerChatUsuarioByUsuario(usuarioid).subscribe(
            (response) => {
                this.chat_usuario = response;
                this.amistadPerfilSelected = this.obtenerPerfil(usuarioid)!;
                this.chatActual = response.chat;

                this.mensajesService.obtenerMensajesByChat(this.chatActual.chatId).subscribe(
                    (response) => {
                        console.log(response);
                        this.mensajesFromChat = response;
                    }
                );
                console.log('ChatUsuario:', this.chat_usuario);
            }
        );
    }

    enviarMensaje(content: string) {
        const mensaje: Mensajes = {
            mensajeId: null,
            contenido: content,
            fechaEnvio: new Date(),
            obj_Usuario: this.sesion.obj_Usuario,
            chat: this.chatActual
        };

        this.mensajesService.enviarMensaje(mensaje).subscribe(
            (response) => {
                console.log('Mensaje enviado:', response);
                this.mensajesFromChat.push(response);
            }
        );

        this.messageContent.nativeElement.value ="";

        console.log(mensaje);
    }

    obtenerPerfil(usuarioId: number): Perfil | undefined {
        return this.perfiles[usuarioId];
    }

    nombreCompleto(perfil: Perfil): string {
        if (perfil) {
            
            return perfil.nombre + " " + perfil.apellido;
        }
        return "";
    }

    trackByFn(index: number, item: Amistades): number {
        return item.amigo.usuarioId;
    }

}

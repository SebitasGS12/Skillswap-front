import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Discuciones } from '../../models/discuciones';
import { Perfil } from '../../models/perfil';
import { Respuestas } from '../../models/respuestas';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { PerfilService } from '../../service/perfilService';
import { DiscucionesService } from '../../service/discucionesService';
import { RespuestasService } from '../../service/respuestasService';
import { map, switchMap } from 'rxjs/operators';
import { Usuario } from '../../models/usuario';
import { AsideComponent } from "../aside/aside.component";
import { HeaderComponent } from "../header/header.component";
import { CommonModule } from '@angular/common';
import { SesionService } from '../../service/sesionService';
import { Sesion } from '../../models/sesion';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-ver-mensajes',
  standalone: true,
  templateUrl: './ver-mensajes.component.html',
  styleUrls: ['./ver-mensajes.component.css'],
  imports: [AsideComponent, HeaderComponent, CommonModule, RouterModule,FormsModule]
})
export class VerMensajesComponent implements OnInit {

  @ViewChild('messageContent') private messageContent!: ElementRef;

  discucion: Discuciones | undefined;
  perfiles: Perfil[] = [];
  respuestas: Respuestas[] = [];
  respuestasFromDiscucion:Respuestas[] = [];
  sesion!: Sesion;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private perfilService: PerfilService,
    private discucionesService: DiscucionesService,
    private respuestasService: RespuestasService,
    private sesionService: SesionService
  ) {}

  ngOnInit() {
    this.sesionService.obtenerSesion().pipe(
      switchMap(sesion => {
        this.sesion = sesion;
        return this.route.params;
      }),
      switchMap(params => {
        const id: number = +params['id'];
        return this.discucionesService.buscar(id);
      }),
      switchMap((discucion: Discuciones) => {
        this.discucion = discucion;
        return this.respuestasService.listar().pipe(
          map((response: Respuestas[]) => response.filter(respuesta => respuesta.obj_Discuciones!.discusionesId === this.discucion?.discusionesId))
        );
      })
    ).subscribe(filteredRespuestas => {
      this.respuestas = filteredRespuestas;
      this.respuestasFromDiscucion = this.respuestas;
    });

    this.perfilService.listar().subscribe(response => {
      this.perfiles = response;
    });
  }

  buscarPerfil(usuario: Usuario | null | undefined): Perfil | undefined {
    if (!usuario) {
      return undefined;
    }
    return this.perfiles.find((perfil) => perfil?.usuario?.usuarioId === usuario.usuarioId);
  }

  enviarRespuesta(contenidoOpinion: string) {
    if (!this.sesion || !this.sesion.obj_Usuario || !this.discucion) {
      console.log("asdasd")
      return;
    }

    const respuesta: Respuestas = {
      respuestasId: null,
      contenido: contenidoOpinion,
      fechaCreacion: new Date(),
      obj_Usuario: this.sesion.obj_Usuario,
      obj_Discuciones: this.discucion
    };

    this.respuestasService.registrar(respuesta).subscribe(
      (response) => {
        console.log(response);
        this.router.navigate([this.router.url]);
        this.respuestasFromDiscucion.push(response);
        this.messageContent.nativeElement.value ="";

      }
    );
  }
}

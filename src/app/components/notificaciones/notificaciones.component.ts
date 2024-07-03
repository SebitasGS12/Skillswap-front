import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { AsideComponent } from '../aside/aside.component';
import { HeaderComponent } from '../header/header.component';
import { SesionService } from '../../service/sesionService';
import { Router } from '@angular/router';
import { NotificacionesService } from '../../service/notificacionesService';
import { Sesion } from '../../models/sesion';
import { Notificacion } from '../../models/notificacion';
import { Amistades } from '../../models/amistades';
import { AmistadesService } from '../../service/amistadesService';

@Component({
  selector: 'app-notificaciones',
  standalone: true,
  templateUrl: './notificaciones.component.html',
  styleUrl: './notificaciones.component.css',
  imports: [CommonModule, AsideComponent, HeaderComponent],
})
export class NotificacionesComponent implements OnInit {

  sesion!: Sesion;
  notificaciones!: Notificacion[];
  constructor(
    private sesionService: SesionService,
    private notificacionesService: NotificacionesService,
    private amistadService:AmistadesService,
    private router: Router
  ) {}

  ngOnInit(): void {
    // Obtener la sesión
    this.sesionService.obtenerSesion().subscribe((response) => {
      console.log(response);
      this.sesion = response;
      if (this.sesion) {
        this.notificacionesService
          .obtenerNotificacionesByUsuario(this.sesion.obj_Usuario.usuarioId)
          .subscribe((response) => {
            console.log(response);
            this.notificaciones = response;
            this.notificaciones.reverse();
          });
      }
    });
  }


  gestionarSolicitud(notificacion: Notificacion, estado: boolean) {
    // Obtener las dos amistades (emisora y receptora)
    this.amistadService.obtenerAmistadesByUsuarioAndAmigo(notificacion.usuario.usuarioId, notificacion.amigo.usuarioId).subscribe(
      (amistades) => {
        if (amistades.length !== 2) {
          console.error('No se encontraron las amistades correspondientes.');
          return;
        }
  
        let amistadEmisora = amistades.find(a => a.usuario.usuarioId === notificacion.usuario.usuarioId);
        let amistadReceptora = amistades.find(a => a.usuario.usuarioId === notificacion.amigo.usuarioId);
  
        if (!amistadEmisora || !amistadReceptora) {
          console.error('No se encontraron las amistades correspondientes.');
          return;
        }
  
        if (estado) {
          amistadEmisora.amistadAceptada = true;
          amistadReceptora.amistadAceptada = true;
        }

        let lstAmistades:Amistades[]=[
          amistadEmisora,
          amistadReceptora
        ]
  
        // Actualizar el estado de las amistades en el servicio
        this.amistadService.registrarAmistades(lstAmistades).subscribe(
          () => {
                // Si el estado es true, cambiar el título de la notificación
                if (estado) {
                  notificacion.titulo = "SOLICITUD ACEPTADA";
                  notificacion.contenido = "YA SON AMIGUES"
                  this.notificacionesService.registrar(notificacion).subscribe();
            }
          }
        );
      }
    );
  }
  
}

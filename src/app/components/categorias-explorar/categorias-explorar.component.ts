import { Component, OnInit } from '@angular/core';
import { AsideComponent } from "../aside/aside.component";
import { CommonModule } from '@angular/common';
import { CategoriaHabilidad } from '../../models/categoria-habilidad';
import { Habilidad } from '../../models/habilidad';
import { CategoriaHabilidadService } from '../../service/categoriaHabilidadService';
import { ActivatedRoute, Router } from '@angular/router';
import { HabilidadesService } from '../../service/habilidadService';
import { FormsModule } from '@angular/forms';
import { Sesion } from '../../models/sesion';
import { SesionService } from '../../service/sesionService';
import { AmistadesService } from '../../service/amistadesService';
import { Usuario } from '../../models/usuario';
import { HeaderComponent } from '../header/header.component';
import { Amistades } from '../../models/amistades';
import { NotificacionesService } from '../../service/notificacionesService';
import { Notificacion } from '../../models/notificacion';
import { PerfilService } from '../../service/perfilService';

@Component({
  selector: 'app-categorias-explorar',
  standalone: true,
  templateUrl: './categorias-explorar.component.html',
  styleUrls: ['./categorias-explorar.component.css'],
  imports: [AsideComponent, CommonModule, FormsModule, HeaderComponent]
})
export class CategoriasExplorarComponent implements OnInit {
  sesion!: Sesion | undefined;
  categoria: CategoriaHabilidad[] = [];
  habilidades: Habilidad[] = [];
  filteredHabilidades: Habilidad[] = [];
  palabraClave: string = '';
  amigosMap: Map<number, boolean> = new Map();

  constructor(
    private categoriaHabilidadService: CategoriaHabilidadService,
    private habilidadService: HabilidadesService,
    private sesionService: SesionService,
    private amistadService: AmistadesService,
    private notificacionService:NotificacionesService,
    private perfilService:PerfilService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.sesionService.obtenerSesion().subscribe((response) => {
      console.log(response);
      this.sesion = response;
      if (this.sesion) {
        this.categoriaHabilidadService.listar().subscribe(
          data => { this.categoria = data; }
        );

        this.habilidadService.listar().subscribe(
          data => {
            this.habilidades = data;
            this.filteredHabilidades = this.habilidades;
            this.verificarAmistades();
          }
        );
      }
    });
  }

  verificarAmistades() {
    if (this.sesion) {
      this.habilidades.forEach(habilidad => {
        const amigoId = habilidad.obj_Perfil.usuario.usuarioId;
        this.amistadService.existeAmistad(this.sesion!.obj_Usuario.usuarioId, amigoId).subscribe(
          (data) => {
            this.amigosMap.set(amigoId, data);
          }
        );
      });
    }
  }

  cambioCategoria(event: Event) {
    const elemento = event.target as HTMLSelectElement;
    const idCategoriaHabilidad = elemento.value;

    if (idCategoriaHabilidad == "99999") {
      this.habilidadService.listar().subscribe(
        data => {
          this.habilidades = data;
          this.filtrarListado();
          this.verificarAmistades();
        }
      );
    } else {
      this.habilidadService.listarPorCategoria(idCategoriaHabilidad).subscribe(
        data => {
          this.habilidades = data;
          this.filtrarListado();
          this.verificarAmistades();
        }
      );
    }
  }

  busqueda(): void {
    this.filtrarListado();
  }

  filtrarListado() {
    if (this.palabraClave) {
      this.filteredHabilidades = this.habilidades.filter(habilidad =>
        habilidad.descripcion.toLowerCase().includes(this.palabraClave.toLowerCase()) ||
        habilidad.obj_Perfil.nombre.toLowerCase().includes(this.palabraClave.toLowerCase()) ||
        habilidad.obj_Perfil.apellido.toLowerCase().includes(this.palabraClave.toLowerCase()) ||
        habilidad.nombre.toLowerCase().includes(this.palabraClave.toLowerCase())
      );
    } else {
      this.filteredHabilidades = this.habilidades;
    }
  }

  agregarAmigo(objusuario: Usuario, objamigo: Usuario) {
    let amistadEmisora: Amistades = {
      fechaAmistad: new Date(),
      amistadAceptada: false,
      usuario: objusuario,
      amigo: objamigo,
      amistadID: null
    };
  
    // Primero registrar la amistad emisora
    this.amistadService.registrar(amistadEmisora).subscribe(
      (response) => {
        console.log('Usuario Emisor registrado exitosamente:', response);
        this.amigosMap.set(objamigo.usuarioId, true);
  
        // Luego obtener el perfil del usuario
        this.perfilService.obtenerPerfilByUsuario(this.sesion?.obj_Usuario.usuarioId!).subscribe(
          (perfil) => {
            let notificacion: Notificacion = {
              notificacionesId: null,
              titulo: "Solicitud de Amistad",
              contenido: `${perfil.nombre} ${perfil.apellido} quiere ser tu amigue`,
              fechaCreacion: new Date(),
              leido: false,
              obj_imagenId: null,
              usuario: objamigo,
              amigo: objusuario,
            };
  
            // Registrar la notificación
            this.notificacionService.registrar(notificacion).subscribe(
              () => {
                console.log('Notificación registrada exitosamente.');
  
                // Finalmente registrar la amistad receptora
                let amistadReceptora: Amistades = {
                  fechaAmistad: new Date(),
                  amistadAceptada: false,
                  usuario: objamigo,
                  amigo: objusuario,
                  amistadID: null
                };
  
                this.amistadService.registrar(amistadReceptora).subscribe(
                  (response) => {
                    console.log('Usuario Receptor registrado exitosamente:', response);
                    this.amigosMap.set(objamigo.usuarioId, true);
                  },
                  (error) => {
                    console.error('Error registrando la amistad receptora:', error);
                  }
                );
              }
            );
          }
        );
      }
    );
  }
}

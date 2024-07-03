import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { Foro } from '../../models/Foro';
import { ForosService } from '../../service/ForosService';
import { DiscucionesService } from '../../service/discucionesService';
import { Discuciones } from '../../models/discuciones';
import { map } from 'rxjs';
import { Perfil } from '../../models/perfil';
import { AsideComponent } from '../aside/aside.component';
import { HeaderComponent } from '../header/header.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { PerfilService } from '../../service/perfilService';
import { Usuario } from '../../models/usuario';

@Component({
  selector: 'app-ver-discuciones',
  standalone: true,
  templateUrl: './ver-discuciones.component.html',
  styleUrls: ['./ver-discuciones.component.css'],
  imports: [CommonModule, AsideComponent, HeaderComponent, FormsModule,RouterModule]

})
export class VerDiscucionesComponent implements OnInit {

  foro: Foro | undefined;
  discuciones: Discuciones[] = [];
  perfiles:Perfil[] = [];
  constructor(
    private route: ActivatedRoute,
    private foroService: ForosService,
    private perfilService:PerfilService,
    private discucionesService: DiscucionesService 
  ) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.perfilService.listar().subscribe(
        (response)=>{
          this.perfiles = response;
        }
      )

      const id: number = +params['id'];
      this.foroService.buscar(id).subscribe(
        (data: Foro) => {
          this.foro = data;
          this.discucionesService.listar().pipe(
            map((response: Discuciones[]) => response.filter(discusion => discusion.obj_Foro.foroId === this.foro?.foroId))
          ).subscribe(filteredDiscuciones => {
            this.discuciones = filteredDiscuciones;
          });
        }
      );
    });
  }

  buscarPerfil(usuario: Usuario): Perfil | undefined {
    return this.perfiles.find((perfil) => perfil.usuario.usuarioId === usuario.usuarioId);
  }
  
  


}

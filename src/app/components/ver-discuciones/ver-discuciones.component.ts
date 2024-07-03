import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { Foro } from '../../models/Foro';
import { ForosService } from '../../service/ForosService';
import { DiscucionesService } from '../../service/discucionesService copy';
import { Discuciones } from '../../models/discuciones';
import { map } from 'rxjs';
import { Perfil } from '../../models/perfil';
import { AsideComponent } from '../aside/aside.component';
import { HeaderComponent } from '../header/header.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-ver-discuciones',
  standalone: true,
  templateUrl: './ver-discuciones.component.html',
  styleUrls: ['./ver-discuciones.component.css'],
  imports: [CommonModule, AsideComponent, HeaderComponent, FormsModule,RouterModule]

})
export class VerDiscucionesComponent implements OnInit {

  foro: Foro | undefined;
  perfiles: { [key: number]: Perfil } = {};
  discuciones: Discuciones[] = [];

  constructor(
    private route: ActivatedRoute,
    private foroService: ForosService,
    private discucionesService: DiscucionesService 
  ) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      const id: number = +params['id'];
      this.foroService.buscar(id).subscribe(
        (data: Foro) => {
          this.foro = data;

          // Llama al servicio de discusiones y filtra según el foroId deseado
          this.discucionesService.listar().pipe(
            map((response: Discuciones[]) => response.filter(discusion => discusion.obj_Foro.foroId === this.foro?.foroId))
          ).subscribe(filteredDiscuciones => {
            this.discuciones = filteredDiscuciones;
          });

        }
      );
    });
  }

}

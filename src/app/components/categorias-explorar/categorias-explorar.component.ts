import { Component, OnInit } from '@angular/core';
import { AsideComponent } from "../aside/aside.component";
import { CommonModule } from '@angular/common';
import { CategoriaHabilidad } from '../../models/categoria-habilidad';
import { Habilidad } from '../../models/habilidad';
import { CategoriaHabilidadService } from '../../service/categoriaHabilidadService';
import { ActivatedRoute, Router } from '@angular/router';
import { HabilidadesService } from '../../service/habilidadService';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-categorias-explorar',
    standalone: true,
    templateUrl: './categorias-explorar.component.html',
    styleUrl: './categorias-explorar.component.css',
    imports: [AsideComponent,CommonModule,FormsModule]
})
export class CategoriasExplorarComponent implements OnInit{

  

  categoria:CategoriaHabilidad[]= [];
  habilidades:Habilidad[]= [];
  filteredHabilidades: Habilidad[] = [];
  palabraClave:string='';
  constructor(
    private categoriaHabilidadService : CategoriaHabilidadService, 
    private habilidadService : HabilidadesService, 
    private router : Router, 
    private route : ActivatedRoute
  ) {}


  ngOnInit(): void {

    this.categoriaHabilidadService.listar().subscribe(
      data => {this.categoria =  data;}
    );
    
    this.habilidadService.listar().subscribe(
      data => {this.habilidades =  data;
        this.filteredHabilidades = this.habilidades; 
      }
    );
  }

  cambioCategoria(event: Event) {

    const elemento = event.target as HTMLSelectElement;
    const idCategoriaHabilidad = elemento.value;

    if ( idCategoriaHabilidad == "99999") {
      this.habilidadService.listar().subscribe(
        data => {this.habilidades = data
          this.filtrarListado(); 
        }
      )
    }else{
      this.habilidadService.listarPorCategoria(idCategoriaHabilidad).subscribe(
        data => {this.habilidades = data
          this.filtrarListado(); 
        }
      )
    }
  }


  busqueda():void {
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
  
}



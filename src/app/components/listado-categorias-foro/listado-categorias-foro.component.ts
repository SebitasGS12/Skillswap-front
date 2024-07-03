import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AsideComponent } from "../aside/aside.component";
import { HeaderComponent } from "../header/header.component";
import { SesionService } from '../../service/sesionService';
import { Sesion } from '../../models/sesion';
import { CategoriaForos } from '../../models/categoria-foros';
import { CategoriaForosService } from '../../service/categoriaForosService';
import { FormsModule } from '@angular/forms';
import { Foro } from '../../models/Foro';
import { ForosService } from '../../service/ForosService';
import { Router, RouterModule } from '@angular/router';

@Component({
    selector: 'app-listado-categorias-foro',
    standalone: true,
    templateUrl: './listado-categorias-foro.component.html',
    styleUrls: ['./listado-categorias-foro.component.css'],
    imports: [CommonModule, AsideComponent, HeaderComponent, FormsModule,RouterModule]
})
export class ListadoCategoriasForoComponent implements OnInit {

  
  categoriasForos!: CategoriaForos[];
  sesion!: Sesion;
  palabraClave: string = '';
  filteredCategorias: CategoriaForos[] = [];
  foros: Foro[] = [];
  forosPorCategoria: { [key: number]: Foro[] } = {};

  constructor(
    private sesionService: SesionService,
    private categoriaForoService: CategoriaForosService,
    private foroService: ForosService,
    private router:Router
  ) {}

  ngOnInit(): void {
    this.sesionService.obtenerSesion().subscribe((response) => {
      console.log(response);
      this.sesion = response;
      if (this.sesion) {
        this.categoriaForoService.listar().subscribe(
          (response) => {
            console.log(response);
            this.categoriasForos = response;
            this.filteredCategorias = this.categoriasForos;
            this.cargarForos();
          }
        );
      }
    });
  }

  cargarForos(): void {
    this.foroService.listar().subscribe((response) => {
      this.foros = response;
      this.foros.forEach(foro => {
        const categoriaId = foro.obj_CategoriaForo.categoriaId;
        if (!this.forosPorCategoria[categoriaId]) {
          this.forosPorCategoria[categoriaId] = [];
        }
        this.forosPorCategoria[categoriaId].push(foro);
      });
    });
  }

  busqueda(): void {
    this.filtrarListado();
  }

  filtrarListado(): void {
    if (this.palabraClave) {
      this.filteredCategorias = this.categoriasForos.filter(
        categoriaForo => categoriaForo.nombre.toLowerCase().includes(this.palabraClave.toLowerCase())
      );
    } else {
      this.filteredCategorias = this.categoriasForos;
    }
  }

  obtenerForosDeCategoria(categoriaId: number): Foro[] {
    return this.forosPorCategoria[categoriaId] || [];
  }

 
}

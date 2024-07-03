import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { AsideComponent } from "../aside/aside.component";
import { CategoriaHabilidadService } from '../../service/categoriaHabilidadService';
import { SesionService } from '../../service/sesionService';
import { Sesion } from '../../models/sesion';
import { CategoriaHabilidad } from '../../models/categoria-habilidad';
import { Router, RouterModule } from '@angular/router';

@Component({
    selector: 'app-menu-usuario',
    standalone: true,
    templateUrl: './menu-usuario.component.html',
    styleUrl: './menu-usuario.component.css',
    imports: [CommonModule, HeaderComponent, AsideComponent,RouterModule]
})
export class MenuUsuarioComponent implements OnInit{
    
    categoriaHabilidad!:CategoriaHabilidad[];
    sesion!:Sesion;
    constructor(
        private router:Router,
        private categoriaHabilidadService:CategoriaHabilidadService,
        private sesionService:SesionService
    ){}

    ngOnInit(): void {

        this.sesionService.obtenerSesion().subscribe((response) => {
            console.log(response);
            this.sesion = response;
            if (this.sesion) {
              this.categoriaHabilidadService.listar().subscribe(
                (response) => {
                  console.log(response);
                  this.categoriaHabilidad = response;
                }
              );
            }
          });
    }

    

}

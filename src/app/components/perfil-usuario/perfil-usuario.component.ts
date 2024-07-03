import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { AsideComponent } from "../aside/aside.component";
import { UsuarioService } from '../../service/usuarioService';
import { PerfilService } from '../../service/perfilService';
import { Perfil } from '../../models/perfil';
import { Sesion } from '../../models/sesion';
import { SesionService } from '../../service/sesionService';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-perfil-usuario',
    standalone: true,
    templateUrl: './perfil-usuario.component.html',
    styleUrl: './perfil-usuario.component.css',
    imports: [HeaderComponent, AsideComponent,RouterModule,CommonModule]
})
export class PerfilUsuarioComponent implements OnInit{

  sesion!:Sesion;
  perfil!:Perfil;
  items:string[] = ['Modas',
    'Liderazgo',
    'Liderazgo'
  
  ];
  foros:string[] = ['Como pasar de una diseñadora a una emprendedora',
    'Guia para construir un sistema de diseño',
    'Guia para construir un sistema de diseño'
  
  ];
  constructor(
    private usuarioService:UsuarioService,
    private perfilService:PerfilService,
    private sesionService:SesionService,
  ){}

  ngOnInit(): void {

    this.sesionService.obtenerSesion().subscribe((response) => {
      console.log(response);
      this.sesion = response;
      if (this.sesion) {
          this.perfilService.obtenerPerfilByUsuario(this.sesion.obj_Usuario.usuarioId).subscribe(
            (response)=>{
              this.perfil = response;
              console.log(response);
            }
          )
      }
    });

  }

  nombreCompleto(perfil: Perfil): string {
    if (perfil) {
        
        return perfil.nombre + " " + perfil.apellido;
    }
    return "";
}
} 
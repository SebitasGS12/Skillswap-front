import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { NegocioService } from '../../service/negocioService';
import { SesionService } from '../../service/sesionService';
import { Sesion } from '../../models/sesion';
import { Perfil } from '../../models/perfil';
import { PerfilService } from '../../service/perfilService';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-aside',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './aside.component.html',
  styleUrl: './aside.component.css'
})
export class AsideComponent implements OnInit {

  sesion!:Sesion;
  user:string = "assets/images/home.png";
  perfil!:Perfil;

  constructor(private router: Router,
    private negocioService: NegocioService,
    private sesionService:SesionService,
    private perfilService:PerfilService
  ){}

  ngOnInit(): void {
    // Obtener la sesión
    this.sesionService.obtenerSesion().subscribe(
      (response) => {
        console.log(response);
        this.sesion = response;
        if (this.sesion) {
          this.perfilService.obtenerPerfilByUsuario(this.sesion.obj_Usuario.usuarioId).subscribe(
            (response) => {
              console.log(response);
              this.perfil = response;
            }
          );
        }
      }
    );
  }

  nombreCompleto(perfil: Perfil) {
    if (perfil) {
      
      if(perfil.nombre != null && perfil.apellido != null ){
        return perfil.nombre+ " " + perfil.apellido;
      }
    }
      return "No especificado";
  }
}
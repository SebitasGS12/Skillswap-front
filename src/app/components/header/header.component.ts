import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { SesionService } from '../../service/sesionService';
import { NegocioService } from '../../service/negocioService';
import { Sesion } from '../../models/sesion';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit{


  sesion!:Sesion;

  constructor(private router: Router,
    private negocioService: NegocioService,
    private sesionService:SesionService) { }


  ngOnInit(): void {

    this.sesionService.obtenerSesion().subscribe(
      (response) => {
        console.log(response);
        this.sesion = response;
      }
    );

  }

  salir(event:Event) {
    event.preventDefault();
    this.negocioService.cerrarSesion(
      this.sesion.obj_Usuario
    ).subscribe(
      (response) => {
        console.log(response);
        this.router.navigate(['/menuPrincipal'])
      }
    );
  }

}

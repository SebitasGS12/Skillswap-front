import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { AsideComponent } from "../aside/aside.component";
import { UsuarioService } from '../../service/usuarioService';
import { PerfilService } from '../../service/perfilService';
import { SesionService } from '../../service/sesionService';
import { Router } from '@angular/router';
import { Sesion } from '../../models/sesion';
import { Perfil } from '../../models/perfil';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-editar-usuario',
    standalone: true,
    templateUrl: './editar-usuario.component.html',
    styleUrl: './editar-usuario.component.css',
    imports: [HeaderComponent, AsideComponent,FormsModule]
})
export class EditarUsuarioComponent implements OnInit{

    sesion!:Sesion;
    perfil!:Perfil;

    constructor(
        private sesionService: SesionService,
        private usuarioService: UsuarioService,
        private perfilService: PerfilService,
        private router: Router
    ) { }
    ngOnInit(): void {
        // Obtener la sesión
        this.sesionService.obtenerSesion().subscribe((response) => {
            console.log(response);
            this.sesion = response;
            if (this.sesion) {

                this.perfilService.obtenerPerfilByUsuario(this.sesion.obj_Usuario.usuarioId).subscribe(
                    (response) =>{
                        this.perfil = response;
                    }
                )


            }
        });
    }

    saveUsuario(perfil:Perfil) {

    this.perfilService.registrar(this.perfil).subscribe(
        (response) => {
            console.log('Perfil actualizado exitosamente', response);
            this.router.navigate(['/perfil']);
        }
    );

    

    }


}

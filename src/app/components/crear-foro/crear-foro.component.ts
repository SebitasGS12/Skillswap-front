import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { AsideComponent } from "../aside/aside.component";
import { Sesion } from '../../models/sesion';
import { SesionService } from '../../service/sesionService';
import { FormsModule } from '@angular/forms';
import { Foro } from '../../models/Foro';
import { ForosService } from '../../service/ForosService';
import { CategoriaForosService } from '../../service/categoriaForosService';
import { CategoriaForos } from '../../models/categoria-foros';
import { Router } from '@angular/router';



@Component({
    selector: 'app-crear-foro',
    standalone: true,
    templateUrl: './crear-foro.component.html',
    styleUrls: ['./crear-foro.component.css'],
    imports: [CommonModule, HeaderComponent, AsideComponent, FormsModule]
})
export class CrearForoComponent implements OnInit {
    sesion!: Sesion;
    categoriaForos!: CategoriaForos[];

    constructor(
        private sesionService: SesionService,
        private foroService: ForosService,
        private categoriasForoService: CategoriaForosService,
        private router:Router
    ) { }

    ngOnInit(): void {
        this.sesionService.obtenerSesion().subscribe(
            (response) => {
                console.log(response);
                this.sesion = response;
                if (this.sesion) {
                    this.categoriasForoService.listar().subscribe(
                        (response) => {
                            console.log(response);
                            this.categoriaForos = response;
                        }
                    );
                }
            }
        );
    }

    nuevoForo(foro: any) {

        const objectForo: Foro = {
            foroId: null,
            titulo: foro.titulo,
            descripcion: foro.descripcion,
            fechaCreacion: foro.fechaCreacion,
            obj_Usuario: this.sesion.obj_Usuario,
            obj_CategoriaForo: this.categoriaForos.find(t => t.categoriaId == foro.categoriaId)!
        };

        this.foroService.registrar(objectForo).subscribe(
            (response) => {
                console.log(response);
                this.router.navigate(['/foros']);

            }
        );
    }

    retornar() {
        this.router.navigate(['/foros']);
    }
}

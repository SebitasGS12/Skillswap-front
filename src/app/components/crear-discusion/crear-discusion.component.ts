import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { AsideComponent } from "../aside/aside.component";
import { DiscucionesService } from '../../service/discucionesService';
import { ActivatedRoute, Router } from '@angular/router';
import { SesionService } from '../../service/sesionService';
import { Sesion } from '../../models/sesion';
import { Foro } from '../../models/Foro';
import { ForosService } from '../../service/ForosService';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Discuciones } from '../../models/discuciones';

@Component({
    selector: 'app-crear-discusion',
    standalone: true,
    templateUrl: './crear-discusion.component.html',
    styleUrl: './crear-discusion.component.css',
    imports: [HeaderComponent, AsideComponent,CommonModule,FormsModule]
})
export class CrearDiscusionComponent implements OnInit {




    sesion!:Sesion;
    foro!:Foro;

    constructor(
        private discucionesService:DiscucionesService,
        private foroService:ForosService,
        private sesionService:SesionService,
        private router:Router,
        private route:ActivatedRoute
    ){}

    ngOnInit(): void {
        this.route.params.subscribe(params => {
            
            
            
            const id: number = +params['id'];
            
            this.sesionService.obtenerSesion().subscribe(
                (response) => {
                    console.log(response);
                    this.sesion = response;
                    if (this.sesion) {
                        this.foroService.buscar(id).subscribe(
                            (data: Foro) => {
                                this.foro = data;
                            }
                        );
                    }
                }
            )




        });
    }

    nuevaDiscucion(discuciones: Discuciones) {

        const newDiscucion:Discuciones={
            discusionesId: null,
            titulo: discuciones.titulo,
            descripcion: discuciones.descripcion,
            fechaCreacion: new Date,
            obj_Usuario: this.sesion.obj_Usuario,
            obj_Foro: this.foro
        }
        this.discucionesService.registrar(newDiscucion).subscribe(
            (response) => {
                console.log(response);
                this.router.navigate(['/foro',this.foro.foroId]);
            }
        );


    }
    retornar() {
    
        this.router.navigate(['/foro',this.foro.foroId]);
    
    }
}

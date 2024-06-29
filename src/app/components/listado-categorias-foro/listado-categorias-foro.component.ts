import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AsideComponent } from "../aside/aside.component";
import { HeaderComponent } from "../header/header.component";

@Component({
    selector: 'app-listado-categorias-foro',
    standalone: true,
    templateUrl: './listado-categorias-foro.component.html',
    styleUrl: './listado-categorias-foro.component.css',
    imports: [CommonModule, AsideComponent, HeaderComponent]
})
export class ListadoCategoriasForoComponent {

  categorias = [
    {
      nombre: 'PROGRAMACIÓN',
      foros: [
        {
          titulo: 'Base de Datos SQL',
          descripcion: 'Foro destinado a temas de SQL y más. Resolverá tus dudas más frecuentes.',
          fecha: '12/05/2024'
        },
        {
          titulo: 'Algoritmo y Estructuras de Datos',
          descripcion: 'Foro destinado a temas de algoritmos iniciales y más. Resolverá tus dudas más frecuentes.',
          fecha: '14/05/2024'
        }
      ]
    },
    {
      nombre: 'MÚSICA',
      foros: [
        {
          titulo: 'Instrumentos de cuerdas',
          descripcion: 'Foro para los interesados en los instrumentos de cuerdas y que deseen aprender de ello.',
          fecha: '16/05/2024'
        },
        {
          titulo: 'Instrumentos de viento',
          descripcion: 'Foro para los interesados en los instrumentos de viento y que deseen aprender de ello.',
          fecha: '18/05/2024'
        }
      ]
    }
  ];
}

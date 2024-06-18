import { Component } from '@angular/core';

@Component({
  selector: 'app-perfil-usuario',
  standalone: true,
  imports: [],
  templateUrl: './perfil-usuario.component.html',
  styleUrl: './perfil-usuario.component.css'
})
export class PerfilUsuarioComponent {
  items:string[] = ['Modas',
    'Liderazgo',
    'Liderazgo'
  
  ];
  foros:string[] = ['Como pasar de una diseñadora a una emprendedora',
    'Guia para construir un sistema de diseño',
    'Guia para construir un sistema de diseño'
  
  ];
} 
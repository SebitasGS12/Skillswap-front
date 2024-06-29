import { Component } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { AsideComponent } from "../aside/aside.component";

@Component({
    selector: 'app-perfil-usuario',
    standalone: true,
    templateUrl: './perfil-usuario.component.html',
    styleUrl: './perfil-usuario.component.css',
    imports: [HeaderComponent, AsideComponent]
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
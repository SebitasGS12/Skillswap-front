import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { AsideComponent } from "../aside/aside.component";

@Component({
    selector: 'app-menu-usuario',
    standalone: true,
    templateUrl: './menu-usuario.component.html',
    styleUrl: './menu-usuario.component.css',
    imports: [CommonModule, HeaderComponent, AsideComponent]
})
export class MenuUsuarioComponent {

}

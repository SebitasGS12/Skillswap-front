import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AsideComponent } from "../aside/aside.component";
import { HeaderComponent } from "../header/header.component";

@Component({
    selector: 'app-notificaciones',
    standalone: true,
    templateUrl: './notificaciones.component.html',
    styleUrl: './notificaciones.component.css',
    imports: [CommonModule, AsideComponent, HeaderComponent]
})
export class NotificacionesComponent {

}

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PerfilUsuarioComponent } from './components/perfil-usuario/perfil-usuario.component';
import { CategoriasExplorarComponent } from './components/categorias-explorar/categorias-explorar.component';
import { CrearForoComponent } from './components/crear-foro/crear-foro.component';
import { ListadoCategoriasForoComponent } from './components/listado-categorias-foro/listado-categorias-foro.component';
import { ListadoPersonasComponent } from './components/listado-personas/listado-personas.component';

import { MenuPrincipalComponent } from './components/menu-principal/menu-principal.component';
import { CrearDiscusionComponent } from './components/crear-discusion/crear-discusion.component';
import { LoginComponent } from './components/login/login.component';
import { MenuUsuarioComponent } from './components/menu-usuario/menu-usuario.component';
import { NotificacionesComponent } from './components/notificaciones/notificaciones.component';

const routes: Routes = [

  {path: '**', redirectTo: '', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListarAmistadesComponent } from './components/listar-amistades/listar-amistades.component';
import { LoginComponent } from './components/login/login.component';
import { MenuUsuarioComponent } from './components/menu-usuario/menu-usuario.component';
import { NotificacionesComponent } from './components/notificaciones/notificaciones.component';

const routes: Routes = [

  //{path: '', component: PaginaPrincipalComponent},

  {path: 'listado', component: ListarAmistadesComponent},
  {path: 'login', component: LoginComponent},
  {path: 'menusu', component: MenuUsuarioComponent},
  {path: 'notificaciones', component: NotificacionesComponent},

  {path: '**', redirectTo: '', pathMatch: 'full'},



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuPrincipalComponent } from './components/menu-principal/menu-principal.component';
import { LoginComponent } from './components/login/login.component';
import { MenuUsuarioComponent } from './components/menu-usuario/menu-usuario.component';
import { NotificacionesComponent } from './components/notificaciones/notificaciones.component';
import { ListadoCategoriasForoComponent } from './components/listado-categorias-foro/listado-categorias-foro.component';
import { PerfilUsuarioComponent } from './components/perfil-usuario/perfil-usuario.component';
import { SkillchatComponent } from './components/skillchat/skillchat.component';
import { CategoriasExplorarComponent } from './components/categorias-explorar/categorias-explorar.component';
import { EditarUsuarioComponent } from './components/editar-usuario/editar-usuario.component';
import { VerDiscucionesComponent } from './components/ver-discuciones/ver-discuciones.component';

const routes: Routes = [
  {path: '', redirectTo: '/iniciarSesion', pathMatch: 'full'},
  { path: 'menuPrincipal', component: MenuPrincipalComponent },
  { path: 'iniciarSesion', component: LoginComponent },
  { path: 'menuUsuario', component: MenuUsuarioComponent },
  { path: 'notificaciones', component: NotificacionesComponent },
  { path: 'foros', component: ListadoCategoriasForoComponent },
  { path: 'perfil', component: PerfilUsuarioComponent },
  { path: 'mensajes', component: SkillchatComponent },
  { path: 'categoriasExplorar', component: CategoriasExplorarComponent },
  { path: 'editarUsuario', component: EditarUsuarioComponent },
  { path: 'foro/:id', component: VerDiscucionesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

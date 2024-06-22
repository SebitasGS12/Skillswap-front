import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PerfilUsuarioComponent } from './components/perfil-usuario/perfil-usuario.component';
import { CategoriasExplorarComponent } from './components/categorias-explorar/categorias-explorar.component';
import { CrearForoComponent } from './components/crear-foro/crear-foro.component';
import { ListadoCategoriasForoComponent } from './components/listado-categorias-foro/listado-categorias-foro.component';
import { ListadoPersonasComponent } from './components/listado-personas/listado-personas.component';

const routes: Routes = [

  //{path: '', component: PaginaPrincipalComponent},

  {path: 'explorar', component: CategoriasExplorarComponent},

  {path: 'perfil', component: PerfilUsuarioComponent},

  {path: 'crearForo', component: CrearForoComponent},

  {path: 'listaCategoriasForo', component: ListadoCategoriasForoComponent},

  {path: 'listadoPersonas', component: ListadoPersonasComponent},

  {path: '**', redirectTo: '', pathMatch: 'full'},




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PerfilUsuarioComponent } from './components/perfil-usuario/perfil-usuario.component';
import { CategoriasExplorarComponent } from './components/categorias-explorar/categorias-explorar.component';

const routes: Routes = [

  //{path: '', component: PaginaPrincipalComponent},

  {path: 'explorar', component: CategoriasExplorarComponent},

  {path: '**', redirectTo: '', pathMatch: 'full'},



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

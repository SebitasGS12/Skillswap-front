import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PerfilUsuarioComponent } from './components/perfil-usuario/perfil-usuario.component';

const routes: Routes = [

  //{path: '', component: PaginaPrincipalComponent},

  {path: 'perfil', component: PerfilUsuarioComponent},

  {path: '**', redirectTo: '', pathMatch: 'full'},



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListarAmistadesComponent } from './components/listar-amistades/listar-amistades.component';
import { MenuPrincipalComponent } from './components/menu-principal/menu-principal.component';
import { CrearDiscusionComponent } from './components/crear-discusion/crear-discusion.component';
const routes: Routes = [

  //{path: '', component: PaginaPrincipalComponent},
  { path: '', component: MenuPrincipalComponent },
  { path: 'discusion', component: CrearDiscusionComponent },
  {path: 'listado', component: ListarAmistadesComponent},

  {path: '**', redirectTo: '', pathMatch: 'full'},



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

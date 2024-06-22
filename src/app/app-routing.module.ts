import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListarAmistadesComponent } from './components/listar-amistades/listar-amistades.component';
import { FooterComponent } from './components/footer/footer.component';

const routes: Routes = [

  //{path: '', component: PaginaPrincipalComponent},

  {path: 'listado', component: FooterComponent},

  {path: '**', redirectTo: '', pathMatch: 'full'},



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

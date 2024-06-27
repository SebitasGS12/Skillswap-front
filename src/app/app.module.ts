import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { BrowserModule, provideClientHydration } from "@angular/platform-browser";
import { AppRoutingModule } from './app-routing.module';
import { HttpClient,  provideHttpClient, withFetch } from "@angular/common/http";
import { AsideComponent } from "./components/aside/aside.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { PerfilUsuarioComponent } from "./components/perfil-usuario/perfil-usuario.component";
import { CategoriasExplorarComponent } from "./components/categorias-explorar/categorias-explorar.component";
import { CrearForoComponent } from "./components/crear-foro/crear-foro.component";
import { ListadoCategoriasForoComponent } from "./components/listado-categorias-foro/listado-categorias-foro.component";
import { ListadoPersonasComponent } from "./components/listado-personas/listado-personas.component";


@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,

    ],
    providers: [
        provideClientHydration(),
        provideHttpClient(withFetch())
    ],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        AppRoutingModule,
        AsideComponent,
        PerfilUsuarioComponent,
        CategoriasExplorarComponent,
        CrearForoComponent,
        ListadoCategoriasForoComponent,
        ListadoPersonasComponent
    ]
})
export class AppModule { }


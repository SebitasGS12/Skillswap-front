import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { BrowserModule, provideClientHydration } from "@angular/platform-browser";
import { AppRoutingModule } from './app-routing.module';
import { ListarAmistadesComponent } from "./components/listar-amistades/listar-amistades.component";
import { provideHttpClient, withFetch } from "@angular/common/http";
import { LoginComponent } from "./components/login/login.component";
import { MenuUsuarioComponent } from "./components/menu-usuario/menu-usuario.component";
import { NotificacionesComponent } from "./components/notificaciones/notificaciones.component";

@NgModule({
    declarations: [
        AppComponent,
    ],
    providers: [
        provideClientHydration(),
        provideHttpClient(withFetch())
    ],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        ListarAmistadesComponent,
        LoginComponent,
        MenuUsuarioComponent,
        NotificacionesComponent
    ]
})
export class AppModule { }


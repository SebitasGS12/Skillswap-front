import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { BrowserModule, provideClientHydration } from "@angular/platform-browser";
import { AppRoutingModule } from './app-routing.module';
import { ListarAmistadesComponent } from "./components/listar-amistades/listar-amistades.component";
import { provideHttpClient, withFetch } from "@angular/common/http";
import { MenuPrincipalComponent } from "./components/menu-principal/menu-principal.component";
import { HeaderComponent } from "./components/header/header.component";
import { CrearDiscusionComponent } from "./components/crear-discusion/crear-discusion.component";

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
        AppRoutingModule,
        ListarAmistadesComponent,
        MenuPrincipalComponent,
        CrearDiscusionComponent
    ]
})
export class AppModule { }


import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { BrowserModule, provideClientHydration } from "@angular/platform-browser";
import { AppRoutingModule } from './app-routing.module';
import { HttpClient,  provideHttpClient, withFetch } from "@angular/common/http";
import { AsideComponent } from "./components/aside/aside.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { PerfilUsuarioComponent } from "./components/perfil-usuario/perfil-usuario.component";

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
        FormsModule,
        ReactiveFormsModule,
        AppRoutingModule,
        AsideComponent,
        PerfilUsuarioComponent
    ]
})
export class AppModule { }


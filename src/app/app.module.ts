import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { BrowserModule, provideClientHydration } from "@angular/platform-browser";
import { AppRoutingModule } from './app-routing.module';
import { ListarAmistadesComponent } from "./components/listar-amistades/listar-amistades.component";
import { provideHttpClient, withFetch } from "@angular/common/http";
import { FooterComponent } from "./components/footer/footer.component";

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
        FooterComponent
    ]
})
export class AppModule { }


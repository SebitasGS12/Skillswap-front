import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { BrowserModule, provideClientHydration } from "@angular/platform-browser";
import { AppRoutingModule } from './app-routing.module';
import { provideHttpClient, withFetch } from "@angular/common/http";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MenuPrincipalComponent } from "./components/menu-principal/menu-principal.component";



@NgModule({
    declarations: [
        AppComponent
    ],
    providers: [
        provideClientHydration(),
        provideHttpClient(withFetch())
    ],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        MenuPrincipalComponent
    ]
})
export class AppModule { }


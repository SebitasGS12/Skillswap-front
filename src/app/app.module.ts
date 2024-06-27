import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { BrowserModule, provideClientHydration } from "@angular/platform-browser";
import { AppRoutingModule } from './app-routing.module';


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
    ]
})
export class AppModule { }


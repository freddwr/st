import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from'@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './component/nav-bar/nav-bar.component';
import { FooterComponent } from './component/footer/footer.component';
import { InicioComponent } from './component/inicio/inicio.component';
import { from } from 'rxjs';
import { ServicioComponent } from './component/servicio/servicio.component';
import { DwebComponent } from './component/dweb/dweb.component';
import { StecnicoComponent } from './component/stecnico/stecnico.component';
import { DgraficoComponent } from './component/dgrafico/dgrafico.component';
import { TecnologiaComponent } from './component/tecnologia/tecnologia.component';
import { BeneficioComponent } from './component/beneficio/beneficio.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    FooterComponent,
    InicioComponent,
    ServicioComponent,
    DwebComponent,
    StecnicoComponent,
    DgraficoComponent,
    TecnologiaComponent,
    BeneficioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

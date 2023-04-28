import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { HeaderComponent } from './header/header.component';
import { ResumenComponent } from './resumen/resumen.component';
import { ServiciosComponent } from './servicios/servicios.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { CertificacionesComponent } from './certificaciones/certificaciones.component';
import { ContactoComponent } from './contacto/contacto.component';

@NgModule({
  declarations: [AppComponent, AboutComponent, HeaderComponent, ResumenComponent, ServiciosComponent, PortfolioComponent, CertificacionesComponent, ContactoComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AboutComponent } from './about/about.component';
import { ExperienciaComponent } from './experiencia/experiencia.component';
import { ServiciosComponent } from './servicios/servicios.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { CertificacionesComponent } from './certificaciones/certificaciones.component';
import { ContactoComponent } from './contacto/contacto.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'header', component: HeaderComponent },
  { path: 'about', component: AboutComponent },
  { path: 'experiencia', component: ExperienciaComponent },
  { path: 'servicios', component: ServiciosComponent },
  { path: 'portfolio', component: PortfolioComponent },
  { path: 'certificaciones', component: CertificacionesComponent },
  { path: 'contacto', component: ContactoComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    HeaderComponent,
    ExperienciaComponent,
    ServiciosComponent,
    PortfolioComponent,
    CertificacionesComponent,
    ContactoComponent,
    HomeComponent,
    RouterModule.forRoot(appRoutes),
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

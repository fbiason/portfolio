import { Component } from '@angular/core';

import { AppRoutingModule } from '../app-routing.module';
import { AppComponent } from '../app.component';
import { AboutComponent } from '../about/about.component';
import { HeaderComponent } from '../header/header.component';
import { ExperienciaComponent } from '../experiencia/experiencia.component';
import { ServiciosComponent } from '../servicios/servicios.component';
import { PortfolioComponent } from '../portfolio/portfolio.component';
import { CertificacionesComponent } from '../certificaciones/certificaciones.component';
import { ContactoComponent } from '../contacto/contacto.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  title = 'my-app';
}

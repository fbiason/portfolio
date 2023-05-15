import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

interface Experiencia {
  nombre: string;
  puesto: string;
  fecha: string;
}

@Injectable({ providedIn: 'root' })
export class DataServices {
  experiencia: Experiencia[] = [];

  constructor(private httpClient: HttpClient) {
    this.CargarExperiencia();
  }
  private CargarExperiencia() {
    this.httpClient
      .get<Experiencia[]>(
        'https://cv-biason-default-rtdb.firebaseio.com/Experiencia.json'
      )
      .subscribe((resp) => {
        this.experiencia = resp;
        console.log(resp);
      });
  }
}

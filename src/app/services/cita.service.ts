import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { AuthService } from './auth.service';

import 'rxjs/Rx';

@Injectable()
export class CitaService {
  private uriCita:string;
  private headers:Headers;

  //Constructor
  constructor(
    private auth:AuthService,
    private http:Http
  ) {
    this.uriCita = "http://localhost:3000/api/citas";
    this.headers = new Headers({
      'Content-Type': 'application/json',
      'Authorization': this.auth.getToken()
    });
  }

  //Obtener Citas
  public getCitas() {
    return this.http.get(this.uriCita, { headers: this.headers })
    .map(res => {
      return res.json();
    });
  }

  //Obtener Cita
  public getCita(idCita:any) {
    let uri = `${this.uriCita}/${idCita}`;
    return this.http.get(uri, { headers: this.headers })
    .map(res => res.json());
  }

  //nuevo Cita
  public newCita(cita:any) {
    let data = JSON.stringify(cita);
    return this.http.post(this.uriCita, data, { headers: this.headers })
    .map(res => res.json());
  }

  //Editar Cita
  public updateCita(cita:any) {
    let uri = `${this.uriCita}/${cita.idCita}`;
    let data = JSON.stringify(cita);

    return this.http.put(uri, data, { headers: this.headers })
    .map(res => res.json());
  }

  //Eliminar Cita
  public deleteCita(idCita:number) {
    let uri = `${this.uriCita}/${idCita}`;
    return this.http.delete(uri, { headers: this.headers })
    .map(res => res.json());
  }

}

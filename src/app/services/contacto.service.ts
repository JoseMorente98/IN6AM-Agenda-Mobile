import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { AuthService } from './auth.service';

import 'rxjs/Rx';

@Injectable()
export class ContactoService {
  private uriContacto:string;
  private headers:Headers;

  //Constructor
  constructor(
    private auth:AuthService,
    private http:Http
  ) {
    this.uriContacto = "http://localhost:3000/api/contactos";
    this.headers = new Headers({
      'Content-Type': 'application/json',
      'Authorization': this.auth.getToken()
    });
  }

  //Obtener Contactos
  public getContactos() {
    return this.http.get(this.uriContacto, { headers: this.headers })
    .map(res => {
      return res.json();
    });
  }

  //Obtener Contacto
  public getContacto(idContacto:any) {
    let uri = `${this.uriContacto}/${idContacto}`;
    return this.http.get(uri, { headers: this.headers })
    .map(res => res.json());
  }

  //nuevo Contacto
  public newContacto(contacto:any) {
    let data = JSON.stringify(contacto);
    return this.http.post(this.uriContacto, data, { headers: this.headers })
    .map(res => res.json());
  }

  //Editar Contacto
  public updateContacto(contacto:any) {
    let uri = `${this.uriContacto}/${contacto.idContacto}`;
    let data = JSON.stringify(contacto);

    return this.http.put(uri, data, { headers: this.headers })
    .map(res => res.json());
  }

  //Eliminar Contacto
  public deleteContacto(idContacto:number) {
    let uri = `${this.uriContacto}/${idContacto}`;
    return this.http.delete(uri, { headers: this.headers })
    .map(res => res.json());
  }

}

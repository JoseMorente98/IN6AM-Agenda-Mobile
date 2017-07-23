import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { AuthService } from './auth.service';

import 'rxjs/Rx';

@Injectable()
export class TareaService {
  private uriTarea:string;
  private headers:Headers;

  //Constructor
  constructor(
    private auth:AuthService,
    private http:Http
  ) {
    this.uriTarea = "http://localhost:3000/api/tareas";
    this.headers = new Headers({
      'Content-Type': 'application/json',
      'Authorization': this.auth.getToken()
    });
  }

  //Obtener Tareas
  public getTareas() {
    return this.http.get(this.uriTarea, { headers: this.headers })
    .map(res => {
      return res.json();
    });
  }

  //Obtener Tarea
  public getTarea(idTarea:any) {
    let uri = `${this.uriTarea}/${idTarea}`;
    return this.http.get(uri, { headers: this.headers })
    .map(res => res.json());
  }

  //nuevo Tarea
  public newTarea(tarea:any) {
    let data = JSON.stringify(tarea);
    return this.http.post(this.uriTarea, data, { headers: this.headers })
    .map(res => res.json());
  }

  //Editar Tarea
  public updateTarea(tarea:any) {
    let uri = `${this.uriTarea}/${tarea.idTarea}`;
    let data = JSON.stringify(tarea);

    return this.http.put(uri, data, { headers: this.headers })
    .map(res => res.json());
  }

  //Eliminar Tarea
  public deleteTarea(idTarea:number) {
    let uri = `${this.uriTarea}/${idTarea}`;
    return this.http.delete(uri, { headers: this.headers })
    .map(res => res.json());
  }

}

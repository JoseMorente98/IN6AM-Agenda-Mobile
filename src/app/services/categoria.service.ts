import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { AuthService } from './auth.service';

import 'rxjs/Rx';

@Injectable()
export class CategoriaService {
  private uriCategoria:string;
  private headers:Headers;

  //Constructor
  constructor(
    private auth:AuthService,
    private http:Http
  ) {
    this.uriCategoria = "http://localhost:3000/api/categorias";
    this.headers = new Headers({
      'Content-Type': 'application/json',
      'Authorization': this.auth.getToken()
    });
  }

  //Obtener Categorias
  public getCategorias() {
    return this.http.get(this.uriCategoria, { headers: this.headers })
    .map(res => {
      return res.json();
    });
  }

  //Obtener Categoria
  public getCategoria(idCategoria:any) {
    let uri = `${this.uriCategoria}/${idCategoria}`;
    return this.http.get(uri, { headers: this.headers })
    .map(res => res.json());
  }

  //nuevo Categoria
  public newCategoria(categoria:any) {
    let data = JSON.stringify(categoria);
    return this.http.post(this.uriCategoria, data, { headers: this.headers })
    .map(res => res.json());
  }

  //Editar Categoria
  public updateCategoria(categoria:any) {
    let uri = `${this.uriCategoria}/${categoria.idCategoria}`;
    let data = JSON.stringify(categoria);

    return this.http.put(uri, data, { headers: this.headers })
    .map(res => res.json());
  }

  //Eliminar Categoria
  public deleteCategoria(idCategoria:number) {
    let uri = `${this.uriCategoria}/${idCategoria}`;
    return this.http.delete(uri, { headers: this.headers })
    .map(res => res.json());
  }

}

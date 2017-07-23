import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CategoriaService } from '../../app/services/categoria.service';

@Component({
  selector: 'page-categorias',
  templateUrl: 'categoria.html'
})
export class CategoriaPage {
  private categorias:any[] = [];

  constructor(
    public navCtrl: NavController,
    public categoriaService: CategoriaService
  ) {
    this.initializeCategoria();
  }

  private initializeCategoria() {
    this.categoriaService.getCategorias()
    .subscribe(categorias => this.categorias = categorias);
  }

}
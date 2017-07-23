import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { TareaService } from '../../app/services/tarea.service';
import { TareaFormPage } from './formTarea';

@Component({
  selector: 'page-tareas',
  templateUrl: 'tarea.html'
})
export class TareaPage {
  private tareas:any[] = [];

  constructor(
    public navCtrl: NavController,
    public tareaService: TareaService
  ) {
    this.initializeTarea();
  }

  private initializeTarea() {
    this.tareaService.getTareas()
    .subscribe(tareas => this.tareas = tareas);
  }

  public viewForm(parametro:any) {
    this.navCtrl.push(TareaFormPage, { parametro });
  }

  borrarTarea(idTarea:any) {
    this.tareaService.deleteTarea(idTarea)
    .subscribe(res => {
      if(res.estado) {
        this.initializeTarea();
      }
    });
  }

}

import { Component, OnInit } from '@angular/core';
import { NavController, NavParams, ToastController } from 'ionic-angular';
import { TareaService } from '../../app/services/tarea.service';
import { TareaPage } from './tarea';

@Component({
  selector: 'page-tarea-form',
  templateUrl: 'formTarea.html',
})
export class TareaFormPage implements OnInit {
  private parametro:string;
  private titulo:string;

  //JSON de Tarea
  private tarea:any = {
    nombre: "",
    descripcion: "",
    fechaEntrega: "",
    idTarea: this.parametro
  }

  //Constructor
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public toast: ToastController,
    public tareaService: TareaService
  ) {

    this.parametro = this.navParams.get('parametro');
    if(this.parametro != "nueva") {
      this.tareaService.getTarea(this.parametro)
      .subscribe(res => this.tarea = res);
      this.titulo = "Detalle Tarea"
    } else {
      this.titulo = "Nueva Tarea";
    }

  }

  ngOnInit() {}

  //Guardar Como
  public saveChanges() {
    if (this.parametro !== 'nueva') {
        this.tareaService.updateTarea(this.tarea)
        .subscribe(res => {
        this.toast.create({
            message: res.mensaje,
            duration: 2000
        }).present();

        setTimeout(() => {
            if(res.estado) {
                this.navCtrl.push(TareaPage);
            } else {
                this.tarea.nombre = "";
                this.tarea.descripcion = "";
                this.tarea.fechaEntrega = "";
            }
        }, 3000);
        });
    } else {
        this.tareaService.newTarea(this.tarea)
        .subscribe(res => {
        this.toast.create({
            message: res.mensaje,
            duration: 2000
        }).present();

        setTimeout(() => {
            if(res.estado) {
                this.navCtrl.push(TareaPage);
            } else {
                this.tarea.nombre = "";
                this.tarea.descripcion = "";
                this.tarea.fechaEntrega = "";
            }
        }, 3000);
        });
    }
  }


}

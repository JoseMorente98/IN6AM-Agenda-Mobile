import { Component, OnInit } from '@angular/core';
import { NavController, NavParams, ToastController } from 'ionic-angular';
import { CitaService } from '../../app/services/cita.service';
import { CitaPage } from './cita';

@Component({
  selector: 'page-cita-form',
  templateUrl: 'formCita.html',
})
export class CitaFormPage implements OnInit {
  private parametro:string;
  private titulo:string;

  //JSON de Cita
  private cita:any = {
    nombre: "",
    descripcion: "",
    fechaCita: '',
    idContacto: 0,
    idCita: this.parametro
  }

  //Constructor
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public toast: ToastController,
    public citaService: CitaService
  ) {

    this.parametro = this.navParams.get('parametro');
    if(this.parametro != "nueva") {
      this.citaService.getCita(this.parametro)
      .subscribe(res => this.cita = res);
      this.titulo = "Detalle Cita"
    } else {
      this.titulo = "Nuevo Cita";
    }

  }

  ngOnInit() {}

  //Guardar Como
  public saveChanges() {
    if (this.parametro !== 'nueva') {
        this.citaService.updateCita(this.cita)
        .subscribe(res => {
        this.toast.create({
            message: res.mensaje,
            duration: 2000
        }).present();

        setTimeout(() => {
            if(res.estado) {
                this.navCtrl.push(CitaPage);
            } else {
                this.cita.nombre = "";
                this.cita.descripcion = "";
                this.cita.fechaCita = "";
                this.cita.idContacto = 0;
            }
        }, 3000);
        });
    } else {
        this.citaService.newCita(this.cita)
        .subscribe(res => {
        this.toast.create({
            message: res.mensaje,
            duration: 2000
        }).present();

        setTimeout(() => {
            if(res.estado) {
                this.navCtrl.push(CitaPage);
            } else {
                this.cita.nombre = "";
                this.cita.descripcion = "";
                this.cita.fechaCita = "";
                this.cita.idContacto = 0;
            }
        }, 3000);
        });
    }
  }


}

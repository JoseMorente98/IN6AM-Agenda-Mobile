import { Component, OnInit } from '@angular/core';
import { NavController, NavParams, ToastController } from 'ionic-angular';
import { ContactoService } from '../../app/services/contacto.service';
import { ContactoPage } from './contacto';

@Component({
  selector: 'page-contacto-form',
  templateUrl: 'formContacto.html',
})
export class ContactoFormPage implements OnInit {
  private parametro:string;
  private titulo:string;

  //JSON de Contacto
  private contacto:any = {
    nombre: "",
    apellido: "",
    correo: "",
    telefono: "",
    idCategoria: 0,
    idContacto: this.parametro
  }

  //Constructor
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public toast: ToastController,
    public contactoService: ContactoService
  ) {

    this.parametro = this.navParams.get('parametro');
    if(this.parametro != "nuevo") {
      this.contactoService.getContacto(this.parametro)
      .subscribe(res => this.contacto = res);
      this.titulo = "Detalle Contacto"
    } else {
      this.titulo = "Nuevo Contacto";
    }

  }

  ngOnInit() {}

  //Guardar Como
  public saveChanges() {
    if (this.parametro !== 'nuevo') {
        this.contactoService.updateContacto(this.contacto)
        .subscribe(res => {
        this.toast.create({
            message: res.mensaje,
            duration: 2000
        }).present();

        setTimeout(() => {
            if(res.estado) {
                this.navCtrl.push(ContactoPage);
            } else {
                this.contacto.nombre = "";
                this.contacto.apellido = "";
                this.contacto.correo = "";
                this.contacto.telefono = "";
                this.contacto.idCategoria = 0;
            }
        }, 3000);
        });
    } else {
        this.contactoService.newContacto(this.contacto)
        .subscribe(res => {
        this.toast.create({
            message: res.mensaje,
            duration: 2000
        }).present();

        setTimeout(() => {
            if(res.estado) {
                this.navCtrl.push(ContactoPage);
            } else {
                this.contacto.nombre = "";
                this.contacto.apellido = "";
                this.contacto.correo = "";
                this.contacto.telefono = "";
                this.contacto.idCategoria = 0;
            }
        }, 3000);
        });
    }
  }


}

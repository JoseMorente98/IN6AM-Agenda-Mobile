import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ContactoService } from '../../app/services/contacto.service';
import { ContactoFormPage } from './formContacto';

@Component({
  selector: 'page-contactos',
  templateUrl: 'contacto.html'
})
export class ContactoPage {
  private contactos:any[] = [];

  constructor(
    public navCtrl: NavController,
    public contactoService: ContactoService
  ) {
    this.initializeContacto();
  }

  private initializeContacto() {
    this.contactoService.getContactos()
    .subscribe(contactos => this.contactos = contactos);
  }

  public viewForm(parametro:any) {
    this.navCtrl.push(ContactoFormPage, { parametro });
  }

  borrarContacto(idContacto:any) {
    this.contactoService.deleteContacto(idContacto)
    .subscribe(res => {
      if(res.estado) {
        this.initializeContacto();
      }
    });
  }

}

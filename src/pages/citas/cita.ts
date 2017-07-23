import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CitaService } from '../../app/services/cita.service';
import { CitaFormPage } from './formCita';

@Component({
  selector: 'page-citas',
  templateUrl: 'cita.html'
})
export class CitaPage {
  private citas:any[] = [];

  constructor(
    public navCtrl: NavController,
    public citaService: CitaService
  ) {
    this.initializeCita();
  }

  private initializeCita() {
    this.citaService.getCitas()
    .subscribe(citas => this.citas = citas);
  }

  public viewForm(parametro:any) {
    this.navCtrl.push(CitaFormPage, { parametro });
  }

  borrarCita(idCita:any) {
    this.citaService.deleteCita(idCita)
    .subscribe(res => {
      if(res.estado) {
        this.initializeCita();
      }
    });
  }
}

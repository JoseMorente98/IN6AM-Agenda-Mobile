import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../home/home';
import { ContactoPage } from '../contactos/contacto';
import { TareaPage } from '../tareas/tarea';
import { CategoriaPage } from '../categorias/categoria';
import { CitaPage } from '../citas/cita';

@Component({
  templateUrl: 'menu.html'
})

export class MenuPage {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', component: HomePage },
      { title: 'Categorias', component: CategoriaPage },
      { title: 'Contactos', component: ContactoPage },
      { title: 'Tareas', component: TareaPage },
      { title: 'Citas', component: CitaPage }
    ];

  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}

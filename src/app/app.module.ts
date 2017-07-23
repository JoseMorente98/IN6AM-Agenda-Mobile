import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { HttpModule } from '@angular/http';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

//IMPORTAR SERVICIOS
import { AuthService } from './services/auth.service';
import { ContactoService } from './services/contacto.service';
import { TareaService } from './services/tarea.service';
import { CategoriaService } from './services/categoria.service';
import { CitaService } from './services/cita.service';

//IMPORTAR COMPONENTES
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { LoginPage } from '../pages/login/login';
import { MenuPage } from '../pages/menu/menu';
import { ContactoPage } from '../pages/contactos/contacto';
import { TareaPage } from '../pages/tareas/tarea';
import { CategoriaPage } from '../pages/categorias/categoria';
import { ContactoFormPage } from '../pages/contactos/formContacto';
import { TareaFormPage } from '../pages/tareas/formTarea';
import { CitaFormPage } from '../pages/citas/formCita';
import { CitaPage } from '../pages/citas/cita';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    LoginPage,
    MenuPage,
    ContactoPage,
    TareaPage,
    CategoriaPage,
    ContactoFormPage,
    TareaFormPage,
    CitaFormPage,
    CitaPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    LoginPage,
    MenuPage,
    ContactoPage,
    TareaPage,
    CategoriaPage,
    ContactoFormPage,
    TareaFormPage,
    CitaFormPage,
    CitaPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    AuthService,
    ContactoService,
    CategoriaService,
    TareaService,
    CitaService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}

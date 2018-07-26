import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {DialogModule, CalendarModule, ToggleButtonModule, DragDropModule, ButtonModule, InputTextareaModule, CheckboxModule, InputTextModule} from 'primeng/primeng';
import {CardModule} from 'primeng/card';
import {MultiSelectModule} from 'primeng/multiselect';
import {ScheduleModule} from 'primeng/schedule';
import {SelectButtonModule} from 'primeng/selectbutton';
import {SelectItem} from "primeng/api";
import {DropdownModule} from 'primeng/dropdown';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {RouterModule} from "@angular/router";
import {RUTAS1_APP} from "./app.routes";
import {HttpClientModule, HttpHeaders} from '@angular/common/http';
import {ReactiveFormsModule} from '@angular/forms';
import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import { AppComponent } from './app.component';
import { RegistroUsuarioComponent } from './registro-usuario/registro-usuario.component';
import { IniciarSesionComponent } from './iniciar-sesion/iniciar-sesion.component';
import { RestablecerContraseniaComponent } from './restablecer-contrasenia/restablecer-contrasenia.component';
import { MenuComponent } from './menu/menu.component';
import { CrearAlarmaComponent } from './crear-alarma/crear-alarma.component';
import { InicioComponent } from './inicio/inicio.component';
import { EncabezadoComponent } from './encabezado/encabezado.component';
import { Encabezado2Component } from './encabezado2/encabezado2.component';
import { Encabezado3Component } from './encabezado3/encabezado3.component';
import {api_rest} from "./api_rest.service";
import { RutaMenuComponent } from './ruta-menu/ruta-menu.component';
import {LoginGuard} from "./login.guard";
import {InicioGuard} from "./inicio.guard";
import { LaserComponent } from './laser/laser.component';
import {LugarService} from "./Servicios/Lugar.service";
import {EventService} from "./Servicios/EventService.service";
import {LaserService} from "./Servicios/Laser.service";
import {DiaService} from "./Servicios/Dia.service";
import {AlarmaService} from "./Servicios/Alarma.service";
import {AlarmaDiaService} from "./Servicios/AlarmaDia.service";

@NgModule({
  declarations: [
    AppComponent,
    RegistroUsuarioComponent,
    IniciarSesionComponent,
    RestablecerContraseniaComponent,
    MenuComponent,
    CrearAlarmaComponent,
    InicioComponent,
    EncabezadoComponent,
    Encabezado2Component,
    Encabezado3Component,
    RutaMenuComponent,
    LaserComponent,
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    ButtonModule,
    CardModule,
    MultiSelectModule,
    DropdownModule,
    FormsModule,
    BrowserAnimationsModule,
    InputTextModule,
    RouterModule.forRoot(
      RUTAS1_APP,
      {
        useHash: true
      }
    ),
    HttpClientModule,
    ReactiveFormsModule,
    MatButtonModule,
    ScheduleModule,
    SelectButtonModule,



  ],

  providers: [
    api_rest,
    LoginGuard,
    InicioGuard,
    LugarService,
    EventService,
    LaserService,
    DiaService,
    AlarmaService,
    AlarmaDiaService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

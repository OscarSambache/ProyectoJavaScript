import { Component, OnInit } from '@angular/core';
import {Laser} from "../Modells/Laser";
import {SelectItem} from "primeng/api";
import {api_rest} from "../api_rest.service";
import {Usuario} from "../Modells/Usuario";
import {Dia} from "../Modells/Dia";
import {DiaService} from "../Servicios/Dia.service";
import {Alarma} from "../Modells/Alarma";
import {AlarmaDia} from "../Modells/AlarmaDia";
import {AlarmaService} from "../Servicios/Alarma.service";
import {AlarmaDiaService} from "../Servicios/AlarmaDia.service";
import {LaserService} from "../Servicios/Laser.service";


@Component({
  selector: 'app-crear-alarma',
  templateUrl: './crear-alarma.component.html',
  styleUrls: ['./crear-alarma.component.css']
})
export class CrearAlarmaComponent implements OnInit {

  arregloLaser: SelectItem[];
  laserSeleccionado: Laser;
  laser: Laser
  usuario: Usuario
  inicio = {hour: 13, minute: 30};
  fin = {hour: 13, minute: 30};
  meridian = true;
  arregloDias: SelectItem[];
  diasSeleccionado: Dia[]=[];
  alarma: Alarma;
  estados: SelectItem[];
  estadoSeleccionado: string;
  alarmaDia: AlarmaDia;
  arregloAlarmas: Alarma[];

  constructor(private ServicioUusuario: api_rest,
              private ServicioDIas: DiaService,
              private ServicioAlarma: AlarmaService,
              private ServicioAlarmaDia: AlarmaDiaService,
              private ServicioLaser: LaserService){

    this.llenarDropdownLasers();
    this.llenarDropdownDias();
    this.llenarRadioButtonEstado();



  }

  ngOnInit() {


  }

  llenarRadioButtonEstado(){
    this.estados = [
      {label: 'encendido', value: 'encendido'},
      {label: 'apagado', value: 'apagado'},
    ];
  }


  llenarDropdownDias(){
    this.ServicioDIas.getDias().subscribe( dias=>{
      console.log('dias', dias)
      this.arregloDias=[];
      dias.map( dia => {
        this.arregloDias.push({
          label: dia.nombreDia,
          value: dia
        })
      })
    })
  }
  llenarDropdownLasers(){
    this.ServicioUusuario.getUser(localStorage.getItem('email')).subscribe( usuario=>{
      this.usuario= new Usuario();
      this.usuario =  usuario[0];
      //console.log('usuario', this.usuario.lasers);
      this.arregloLaser=[];

      this.arregloLaser.push({
        label: 'seleccionar laser',
        value: this.laserSeleccionado
      })
      this.usuario.lasers.map( laser =>{
        this.arregloLaser.push({
          label: laser.nombreLaser,
          value: laser
        })
      })
    })
  }

  cambioLaser(laser){
    this.arregloAlarmas = [];
    this.laser= new Laser();
    this.laser = laser.value;

    this.ServicioLaser.getLaser(this.laser.id).subscribe( laser =>{
      this.arregloAlarmas = laser.alarmas
    })

  }

  crearAlarma(){
    this.alarma = new Alarma();
    this.alarma.horaInicio = this.inicio.hour.toString();
    this.alarma.minutoInicio= this.inicio.minute.toString();
    this.alarma.horaFin = this.fin.hour.toString();
    this.alarma.minutoFin= this.fin.minute.toString();
    this.alarma.estado= this.estadoSeleccionado.toString();
    this.alarma.laserIdFK = this.laser.id;

    this.ServicioAlarma.addAlarma(this.alarma).subscribe( alarma =>{

      this.diasSeleccionado.map(dia =>{
        this.alarmaDia = new AlarmaDia();
        this.alarmaDia.alarmaIdFK = alarma.id;
        this.alarmaDia.diaIdFK = dia.id;
        this.alarmaDia.nombreDia = dia.nombreDia;

        this.ServicioAlarmaDia.addAlarmaDia(this.alarmaDia).subscribe( alarmaDia => {

          //console.log('dias', alarmaDia)
        })
      })
      //console.log('alarma', alarma)
    })
    this.arregloAlarmas.push(this.alarma)
    this.limpiar()

  }

  limpiar(){
    this.estadoSeleccionado=null;
    this.diasSeleccionado=[];

  }
}





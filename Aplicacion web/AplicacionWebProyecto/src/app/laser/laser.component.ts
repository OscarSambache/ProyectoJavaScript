import { Component, OnInit } from '@angular/core';
import {SelectItem} from "primeng/api";
import {Usuario} from "../Modells/Usuario";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {LugarService} from "../Servicios/Lugar.service";
import {Laser} from "../Modells/Laser";
import {lugar} from "../Modells/lugar";
import {Seccion} from "../Modells/Seccion";
import {api_rest} from "../api_rest.service";
import {LaserService} from "../Servicios/Laser.service";
import {Router} from "@angular/router";


@Component({
  selector: 'app-laser',
  templateUrl: './laser.component.html',
  styleUrls: ['./laser.component.css']
})
export class LaserComponent implements OnInit {



  arregloLugares: SelectItem[];
  selectedLugar1: lugar;
  arregloSecciones: SelectItem[];
  selectedSeccion: Seccion;
  laser: Laser;
  usuario: Usuario;
  codigoLaser: string;
  nombreLaser: string="";


  constructor(
    private lugarService: LugarService,
    private UsuarioService: api_rest,
    private LaserService: LaserService,
  )
   {
     this.llenarDropdownLugar();
     this.iniciarDropdownSeccion();
     this.codigoLaser= this.crearCodigoLaser();


   }

  ngOnInit() {
  }


  cambioLugar(evento ){
    this.llenarDrodownSeccion(evento);
  }


  crearLaser(){

    this.UsuarioService.getUser(localStorage.getItem('email')).subscribe( usuario=>{
      this.usuario=usuario[0];
      this.laser= new Laser();
      this.laser.seccionIdFK = this.selectedSeccion.id;
      this.laser.nombreLaser= this.nombreLaser;
      this.laser.estado= 'apagado';
      this.laser.codigoLaser=  this.codigoLaser;
      this.laser.usuarioIdFK= this.usuario.id;
      console.log(this.laser)
      this.limpiar();

      this.LaserService.addLaser(this.laser).subscribe( laser=>{
        console.log('laser guardado',laser);
      })
    })
  }

  crearCodigoLaser(): string{
    let  chars = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let result = '';
    for (var i = 5; i > 0; --i) {
      result += chars[Math.floor(Math.random() * chars.length)];
    }
    return result;
  }

  limpiar(){
    this.nombreLaser="";
    this.codigoLaser=this.crearCodigoLaser();
    this.llenarDropdownLugar();
    this.iniciarDropdownSeccion();

  }

  llenarDropdownLugar(){
    this.lugarService.getLugares().subscribe(data => {
      this.arregloLugares=[];
      this.arregloLugares.push({
        label: 'seleccionar lugar',
        value:  this.selectedLugar1
      })

      data.map(lugar2 =>{
        this.arregloLugares.push({
          label: lugar2.descripionLugar,
          value: lugar2
        })
      })
    })
  }

  llenarDrodownSeccion(evento){
    this.arregloSecciones=[];
    this.arregloSecciones.push({
      label: 'seleccionar seccion',
      value:  this.selectedSeccion
    })
    evento.value.Seccion.map( seccion => {
      this.arregloSecciones.push({
        label: seccion.descripionSeccion,
        value: seccion
      })
    })
  }

  iniciarDropdownSeccion(){
    this.arregloSecciones=[];
    this.arregloSecciones.push({
      label: 'seleccionar seccion',
      value:  this.selectedSeccion
    })
  }
}



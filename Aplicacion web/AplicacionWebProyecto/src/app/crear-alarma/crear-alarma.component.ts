import { Component, OnInit } from '@angular/core';
import {SelectItem} from "primeng/api";

@Component({
  selector: 'app-crear-alarma',
  templateUrl: './crear-alarma.component.html',
  styleUrls: ['./crear-alarma.component.css']
})
export class CrearAlarmaComponent implements OnInit {


  lugar1: SelectItem[];
  selectedLugar1: Lugar;

  Seccion: SelectItem[];
  selectedSeccion: Seccion;



  constructor() {
    //SelectItem API with label-value pairs
    this.lugar1 = [
      {label:'Seleccione Lugar.ts', value:null},
      {label:'Casa', value:{id:1, nombre: 'Casa'}},
      {label:'Oficina', value:{id:2, nombre: 'Oficina'}}
    ];

    this.Seccion = [
      {label:'Seleccione seccion', value:null},
      {label:'Sala', value:{id:1, nombre: 'Sala'}},
      {label:'Parqueadero', value:{id:2, nombre: 'Parqueadero'}}
    ];
  }

  ngOnInit() {
  }

}


interface Lugar {
  nombre: string;
}

interface Seccion {
  nombre: string;

}



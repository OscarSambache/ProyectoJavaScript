import { Component, OnInit } from '@angular/core';
import {SelectItem} from "primeng/api";
import {Usuario} from "../Modells/Usuario";
import {FormGroup} from "@angular/forms";
import {LugarService} from "../Servicios/Lugar.service";
import {Laser} from "../Modells/Laser";
import {lugar} from "../Modells/lugar";
import {Seccion} from "../Modells/Seccion";


@Component({
  selector: 'app-laser',
  templateUrl: './laser.component.html',
  styleUrls: ['./laser.component.css']
})
export class LaserComponent implements OnInit {


  lugar: lugar ;
  arregloLugares: SelectItem[];
  selectedLugar1: lugar;
  seccion: Seccion;
  arregloSecciones: SelectItem[];
  selectedSeccion: Seccion;

  LaserForm: FormGroup;


  constructor(
    public lugarService: LugarService
  )
   {



     this.lugarService.getLugares().subscribe(data => {
       //console.log(data);
       this.arregloLugares=[];

       data.map(lugar2 =>{
         //console.log("lugar: ", lugar2.id)

         this.arregloLugares.push({
           label: lugar2.descripionLugar,
           value: lugar2
         })
       })

     })

  }

  ngOnInit() {
  }

  cambioLugar(evento ){
   //console.log(evento.value.Seccion);
   this.arregloSecciones=[];
   evento.value.Seccion.map( seccion => {
     this.arregloSecciones.push({
       label: seccion.descripionSeccion,
       value: seccion
     })
   })
  }


}



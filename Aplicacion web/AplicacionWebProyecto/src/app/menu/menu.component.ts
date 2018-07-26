import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(private _router: Router,
              ) { }

  ngOnInit() {
  }

  AgregarLaser(){
    const url = ['/menu/agregar_laser'];
    this._router.navigate(url);

  }

  ConfigurarAlarma(){
    const url =['/menu/crear_alarma'];
    this._router.navigate(url)
  }


}

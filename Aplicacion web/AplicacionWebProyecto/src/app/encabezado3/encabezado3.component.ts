import { Component, OnInit } from '@angular/core';
import {Usuario} from "../Modells/Usuario";
import {api_rest} from "../api_rest.service";

@Component({
  selector: 'app-encabezado3',
  templateUrl: './encabezado3.component.html',
  styleUrls: ['./encabezado3.component.css']
})
export class Encabezado3Component implements OnInit {

  usuario: Usuario
  constructor(private UsuarioServuce: api_rest) {
    this.UsuarioServuce.getUser(localStorage.getItem('email'))
  }


  ngOnInit() {
  }

}

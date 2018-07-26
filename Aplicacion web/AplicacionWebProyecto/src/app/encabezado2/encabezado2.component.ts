import { Component, OnInit } from '@angular/core';
import {Usuario} from "../Modells/Usuario";
import {api_rest} from "../api_rest.service";

@Component({
  selector: 'app-encabezado2',
  templateUrl: './encabezado2.component.html',
  styleUrls: ['./encabezado2.component.css']
})
export class Encabezado2Component implements OnInit {

  usuario: Usuario
  constructor(private UsuarioServuce: api_rest) {
    this.usuario= new Usuario();
    this.UsuarioServuce.getUser(localStorage.getItem('email')).subscribe( data=>{
      this.usuario=data[0];
      console.log('usuario', this.usuario)
    })
  }


  ngOnInit() {
  }

  logout(){
    localStorage.removeItem('email');
    console.log('email removed',localStorage.getItem('email'));
  }

}

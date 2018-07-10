import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {telefonoValidator} from "../Validaciones/telefono.validator";
import {api_rest} from "../api_rest.service";
import {Usuario} from "../Modells/Usuario";

@Component({
  selector: 'app-iniciar-sesion',
  templateUrl: './iniciar-sesion.component.html',
  styleUrls: ['./iniciar-sesion.component.css']
})
export class IniciarSesionComponent implements OnInit {

  LogginForm: FormGroup;
  usuario: Usuario;
  passworsCorrecto: boolean;

  constructor(private _router: Router,
              private fb: FormBuilder,
              public api_rest: api_rest,) {
    this.buildForm();
  }


  buildForm() {
    this.LogginForm = this.fb.group({

      email: ['', Validators.compose([Validators.required, Validators.email]) ],
      password: ['', Validators.compose([Validators.required]) ],
    });
  }
  ngOnInit() {
  }

  iniciar_sesion(){
//if.....
    //else ==>const
  }

  getUser(email: string, password:string) {

      this.api_rest.getUser(email).subscribe(data => {
        console.log(data[0]);

        if(data[0]!=undefined){
          this.usuario = new Usuario();
          this.usuario=data[0];
          console.log(this.usuario.contrasenia);
          if(password==this.usuario.contrasenia){
            localStorage.setItem('email', email);
            const url = ['/menu'];
            this._router.navigate(url);

          }
          else{
            this.passworsCorrecto=false;
          }
        }

        else{
          console.log('correo incorrecto');
          this.passworsCorrecto=false;
          //no cambia ruta
        }

      })




  }
}

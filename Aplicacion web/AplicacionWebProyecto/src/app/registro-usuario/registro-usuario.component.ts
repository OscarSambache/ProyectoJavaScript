import { Component, OnInit } from '@angular/core';
import {Usuario} from "../Modells/Usuario";
import {api_rest} from "../api_rest.service";
import {Router} from "@angular/router";
import {FormBuilder, FormGroup, NgForm, Validators} from "@angular/forms";
import {telefonoValidator} from "../Validaciones/telefono.validator";


@Component({
  selector: 'app-registro-usuario',
  templateUrl: './registro-usuario.component.html',
  styleUrls: ['./registro-usuario.component.css']
})
export class RegistroUsuarioComponent implements OnInit {

  usuario: Usuario;
  RegistroForm: FormGroup;
  existeCorreo: boolean=false;


  constructor(private _router: Router,
              public api_rest: api_rest,
              private fb: FormBuilder,
  ) {
    this.buildForm();
  }

  buildForm() {
    this.RegistroForm = this.fb.group({
      nombre: ['', Validators.compose([Validators.required])  ],
      email: ['', Validators.compose([Validators.required, Validators.email]) ],
      confirmarEmail: ['', Validators.compose([Validators.required, Validators.email]) ],
      password: ['', Validators.compose([Validators.required, Validators.minLength(6)]) ],
      confirmarPassword: ['', Validators.compose([Validators.required, Validators.minLength(6)]) ],
      direccion: ['', Validators.compose([Validators.required])  ],
      telefono: ['', Validators.compose(
        [
          Validators.required,
          telefonoValidator(/^[0][9][0-9]{8}$/),
        ]
      )]
    });



  }

  ngOnInit() {

  }

  agregarUsuario(nombre: string, email:string, contrasenia: string, direccion:string, telefono: string){

    this.usuario = new Usuario();
    this.usuario.nombre= nombre;
    this.usuario.email= email;
    this.usuario.contrasenia= contrasenia;
    this.usuario.direccion=direccion;
    this.usuario.telefono = telefono;
    this.api_rest.addUser(this.usuario).subscribe(data =>{
      console.log(data);
    })

    localStorage.setItem('email', email);

    const url = ['/menu'];
    this._router.navigate(url);

  }



  submit() {
    const password = this.RegistroForm.get('password').value;
  }
}

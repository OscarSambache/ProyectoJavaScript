import {Routes} from "@angular/router";
import {RegistroUsuarioComponent} from "./registro-usuario/registro-usuario.component";
import {InicioComponent} from "./inicio/inicio.component";
import {IniciarSesionComponent} from "./iniciar-sesion/iniciar-sesion.component";
import {RestablecerContraseniaComponent} from "./restablecer-contrasenia/restablecer-contrasenia.component";
import {MenuComponent} from "./menu/menu.component";
import {CrearAlarmaComponent} from "./crear-alarma/crear-alarma.component";
import {RutaMenuComponent} from "./ruta-menu/ruta-menu.component";
import {LoginGuard} from "./login.guard";
import {InicioGuard} from "./inicio.guard";
import {LaserComponent} from "./laser/laser.component";

export const RUTAS1_APP: Routes = [
  {
    path: '',
    component: InicioComponent,
    canActivate: [InicioGuard]
  },

  {
    path: 'registro',
    component: RegistroUsuarioComponent,
    canActivate: [InicioGuard]
  },

  {
    path: 'iniciar_sesion',
    component: IniciarSesionComponent,
    canActivate: [InicioGuard]
  },
  {
    path: 'recuperar_password',
    component: RestablecerContraseniaComponent,
    canActivate: [InicioGuard]
  },
  {
    path: 'menu',
    component: RutaMenuComponent,
    children: [
      {
        path: '',
        component: MenuComponent
      },
      {
        path: 'agregar_laser',
        component: LaserComponent
      },
      {
        path: 'crear_alarma',
        component: CrearAlarmaComponent
      }

    ],
    canActivate: [LoginGuard],


  }
];


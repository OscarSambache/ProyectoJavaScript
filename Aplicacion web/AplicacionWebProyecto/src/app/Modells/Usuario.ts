
import {Laser} from "./Laser";

export class Usuario{
  id:number;
  nombre ?: string;
  email ?: string;
  contrasenia ?: string;
  direccion ?: string;
  telefono ?: string;
  lasers? : Laser[];
}




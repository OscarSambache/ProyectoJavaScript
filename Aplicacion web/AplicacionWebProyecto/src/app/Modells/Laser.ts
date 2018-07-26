import {Alarma} from "./Alarma";


export class Laser {
  id: number;
  codigoLaser: string;
  nombreLaser:string;
  estado: string;
  usuarioIdFK: number
  seccionIdFK:number;
  alarmas?: Alarma[];
}

import {AlarmaDia} from "./AlarmaDia";

export  class Alarma {
  id?: number;
  horaInicio?: string;
  minutoInicio?: string;
  horaFin?: string;
  minutoFin?: string;
  estado?: string;
  laserIdFK: number;
  alarmasDias?: AlarmaDia[];
}

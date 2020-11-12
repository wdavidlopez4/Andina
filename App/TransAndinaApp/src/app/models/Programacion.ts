import {Ruta} from "./Ruta";
import {Conductor} from "./Conductor";
import {Vehiculo} from "./Vehiculo";

export class Programacion {
    id?: number;
    fecha: Date;
    hora_salida: string;
    hora_llegada: string;
    id_ruta?: Ruta;
    id_conductor?: Conductor;
    id_vehiculo?: Vehiculo;
    estado: boolean;

    conductor?: Conductor;
    vehiculo?: Vehiculo;
  }

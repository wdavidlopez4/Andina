import {Ruta} from "./Ruta";
import {Persona} from "./Persona";
import {Vehiculo} from "./Vehiculo";

export class Programacion {
    id?: number;
    fecha: Date;
    hora_salida: string;
    hora_llegada: string;
    id_ruta?: Ruta;
    id_persona?: Persona;
    id_vehiculo?: Vehiculo;
    estado: boolean;

    persona?: Persona;
    vehiculo?: Vehiculo;
  }

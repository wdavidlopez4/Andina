import {Paradas} from "./Paradas";
import {Persona} from "./Persona";
import {Vehiculo} from "./Vehiculo";

export class Ruta {
  id?: number;
  nombre: string;
  fecha: Date;
  hora: number
  precio: number;
  id_persona?: Persona;
  id_vehiculo?: Vehiculo;
  paradas?: Paradas[];
  estado?: number;
}

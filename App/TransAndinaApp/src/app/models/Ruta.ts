import {Paradas} from "./Paradas";
import {Conductor} from "./Conductor";
import {Vehiculo} from "./Vehiculo";

export class Ruta {
  id?: number;
  nombre: string;
  fecha: Date;
  hora: number
  precio: number;
  id_conductor?: Conductor;
  id_vehiculo?: Vehiculo;
  paradas?: Paradas[];
}

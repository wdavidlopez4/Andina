import { Ruta } from "./Ruta";
import { Persona } from "./Persona";
import { Vehiculo } from "./Vehiculo";
import { Paradas } from './Paradas';

export class Programacion {
  id?: number;
  nombre: string;
  hora: string;
  precio: string;
  value: number;
  fecha: Date;
  hora_salida: string;
  hora_llegada: string;
  id_ruta?: Ruta;
  id_persona?: number;
  id_vehiculo?: number;
  estado: boolean;
  persona?: Persona;
  vehiculo?: Vehiculo;
  paradas?: Paradas[];
}

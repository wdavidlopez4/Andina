import {Paradas} from "./Paradas";

export class Ruta {
  id?: number;
  nombre: string;
  fecha: Date;
  hora: number
  precio: number;

  paradas?: Paradas[];
}

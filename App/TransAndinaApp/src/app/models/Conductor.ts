import { StringifyOptions } from 'querystring';
import {Persona} from "./Persona";

export class Conductor {
  id?: number;
  id_conductor: number;
  tipo_doc_conductor: string;
  doc_conductor: number;
  Nombre_conductor: string;
  Apellido_conductor: string;
  celular_conductor: String;
  estado: boolean;

  //Relacion
  persona?: Persona;
}

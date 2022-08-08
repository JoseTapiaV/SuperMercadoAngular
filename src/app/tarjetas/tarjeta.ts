import { Cliente } from "../clientes/cliente";

export class PagoTarjeta {
    id:number;
    numero: string;
    nombre:string;
    fecha:string;
    cliente: string = localStorage.getItem('ClienteID');
  }

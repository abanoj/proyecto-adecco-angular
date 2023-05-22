export class Asignatura {
  id?: number;
  nombre: string;
  titular?: number;
  suplente?: number;

  constructor(nombre: string){
    this.nombre = nombre;
  }
}

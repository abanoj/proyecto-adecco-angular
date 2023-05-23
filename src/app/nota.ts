import { Asignatura } from "./asignatura";
import { Curso } from "./curso";
import { Usuario } from "./usuario";

export class Nota {
  id?: number;
  alumno: Usuario;
  curso: Curso;
  asignatura: Asignatura;
  nota: number;
  
  constructor(alumno: Usuario, curso: Curso, asignatura: Asignatura, nota: number){
    this.alumno = alumno;
    this.curso = curso;
    this.asignatura = asignatura;
    this.nota = nota;
  }
}

export class Nota {  
  alumno: String;
  curso: String;
  asignatura: String;
  nota: number;
  
  constructor(alumno: String, curso: String, asignatura: String, nota: number){
    this.alumno = alumno;
    this.curso = curso;
    this.asignatura = asignatura;
    this.nota = nota;
  }
}

export class Nota {
  id?: number;
  idAlumno: number;
  idCurso: number;
  idAsignatura: number;
  nota: number;
  
  constructor(idAlumno: number, idCurso: number, idAsignatura: number, nota: number){
    this.idAlumno = idAlumno;
    this.idCurso = idCurso;
    this.idAsignatura = idAsignatura;
    this.nota = nota;
  }
}

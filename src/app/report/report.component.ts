import { Component } from '@angular/core';
import { FormGroup, FormControl} from '@angular/forms';

import { Nota } from '../nota';
import { NotaService } from '../nota.service';
import { UsuariosService } from '../usuarios.service';
import { AsignaturaService } from '../asignatura.service';
import { Usuario } from '../usuario';
import { Asignatura } from '../asignatura';
import { CursoService } from '../curso.service';
import { Curso } from '../curso';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})

export class ReportComponent {

  notas: Nota[] = [];
  alumnos: Usuario[] = [];
  usuario!: Usuario;
  asignatura!: Asignatura;
  curso!: Curso;
  myNota?: Nota;
  dni: string = '';
  nombre: string = '';
  cursoName = '';
  asignaturaName = '';
  idC!: number;
  idA!: number;

  constructor(
    private notaService: NotaService,
    private usuariosService: UsuariosService,
    private cursoService: CursoService,
    private asignaturaService: AsignaturaService
    ){}

  addNotaForm = new FormGroup ({
    alumno: new FormControl(''),
    curso: new FormControl(''),
    asignatura: new FormControl(''),
    nota: new FormControl(0),
  });

  editNotaForm = new FormGroup ({
    alumno: new FormControl(this.myNota?.idAlumno),
    curso: new FormControl(this.myNota?.idCurso),
    asignatura: new FormControl(this.myNota?.idAsignatura),
    nota: new FormControl(this.myNota?.nota),
  });

  buscar(): void{
    //Compruebo Usuario
    this.usuariosService.getByDNI(this.dni).subscribe(
      data => {
        this.usuario = data;
      }, 
      err => {
        console.log(err.error);
      }
    );
    if(!this.dni == null){
    }
    //Compruebo Aignatura
    this.asignaturaService.getByName(this.asignaturaName).subscribe(
      data => {
        this.asignatura = data;
      }, 
      err => {
        console.log(err.error);        
      }
    );
    if(!this.asignaturaName == null){
    }
    //Compruebo Curso
    this.cursoService.getByName(this.cursoName).subscribe(
      data => {
        this.curso = data;
      },
      err => {
        console.log(err.error);
      }
    );
    if(!this.cursoName == null){
    }

    //Comprobar Usuario y Asignatura
    if(this.usuario != null && this.asignatura != null){
      this.notaService.getByAsignaturaAndAlumno(this.asignatura.id!, this.usuario.id!).subscribe(
        data => {
          console.log(data);
          this.notas = data;
        }, 
        err => {
          console.log(err.error);
        }
      );
    }

    //Comprobar Usuario y Cursio
    if(this.usuario != null && this.curso != null){
      this.notaService.getByCursoAndAlumno(this.curso.id!, this.usuario.id!).subscribe(
        data => {
          console.log(data);
          this.notas = data;
        },
        err => {
          console.log(err.error);
        }
      );
    }

  }

  addNotaSubmit(){
  };

  editNotaSubmit(){
  }

  leerFila(nota: Nota){
    this.myNota = nota;
  }

}

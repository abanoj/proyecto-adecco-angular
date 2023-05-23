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
  myNota?: Nota;
  dni: string = '';
  cursoName = '';
  asignaturaName = '';

  constructor(
    private notaService: NotaService,
    private usuariosService: UsuariosService,
    private cursoService: CursoService,
    private asignaturaService: AsignaturaService
    ){}

  // addNotaForm = new FormGroup ({
  //   alumno: new FormControl(''),
  //   curso: new FormControl(''),
  //   asignatura: new FormControl(''),
  //   nota: new FormControl(0),
  // });

  editNotaForm = new FormGroup ({
    alumno: new FormControl(this.myNota?.alumno),
    curso: new FormControl(this.myNota?.curso),
    asignatura: new FormControl(this.myNota?.asignatura),
    nota: new FormControl(this.myNota?.nota),
  });

  findNotas(dniUsuario: string, nombreCurso: string, nombreAsignatura: string): void{    
    this.notaService.findNotas(dniUsuario, nombreCurso, nombreAsignatura).subscribe(
      data => {this.notas = data},
      err => {console.log(err.error)}
      );
  }

  addNotaSubmit(){
  };

  editNotaSubmit(){
  }

  leerFila(nota: Nota){
    this.myNota = nota;
  }

}

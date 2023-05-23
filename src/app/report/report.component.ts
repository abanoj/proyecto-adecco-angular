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
  notaSeleccionada?: Nota;
  cursos: Curso[] = [];
  asignaturas: Asignatura[] = [];
  showModal: boolean = false;
  dni: string = '';
  selectedCurso = '';
  selectedAsignatura = '';

  constructor(
    private notaService: NotaService,
    private cursoService: CursoService,
    private asignaturaService: AsignaturaService
    ){}

  ngOnInit(){
    this.cursoService.getAll().subscribe(data => this.cursos = data);
    this.asignaturaService.getAll().subscribe(data => this.asignaturas = data);
  }
  // addNotaForm = new FormGroup ({
  //   alumno: new FormControl(''),
  //   curso: new FormControl(''),
  //   asignatura: new FormControl(''),
  //   nota: new FormControl(0),
  // });

  // editNotaForm = new FormGroup ({
  //   alumno: new FormControl(this.notaSeleccionada?.alumno),
  //   curso: new FormControl(this.notaSeleccionada?.curso),
  //   asignatura: new FormControl(this.notaSeleccionada?.asignatura),
  //   nota: new FormControl(this.notaSeleccionada?.nota),
  // });

  findNotas(dniUsuario: string, nombreCurso: string, nombreAsignatura: string): void{    
    this.notaService.findNotas(dniUsuario, nombreCurso, nombreAsignatura).subscribe(
      data => {this.notas = data},
      err => {console.log(err.error)}
      );
  }

  addNotaSubmit(){
  };

  editNotaSubmit(){
    if(this.notaSeleccionada && this.notaSeleccionada.id){
      this.notaService.editNota(this.notaSeleccionada.id, this.notaSeleccionada).subscribe(
        data => {console.log(data)},
        err => {console.log(err.error)}
      );
    }
    this.showModal = false;
  }

  leerFila(nota: Nota){
    this.notaSeleccionada = nota;
    this.showModal = true;
  }

}

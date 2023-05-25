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
import { Router } from '@angular/router';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})

export class ReportComponent {

  notas: Nota[] = [];
  notaSeleccionada?: Nota;
  cursos: Curso[] = [];
  usuario!: Usuario;
  asignaturas: Asignatura[] = [];
  showModal: boolean = false;
  dni: string = '';
  selectedCurso = '';
  selectedAsignatura = '';
  addCurso!: Curso;
  addAsignatura!: Asignatura;

  constructor(
    private notaService: NotaService,
    private cursoService: CursoService,
    private asignaturaService: AsignaturaService,
    private usuariosService: UsuariosService,
    private router: Router
    ){}

  ngOnInit(){
    const token = localStorage.getItem('token');
    if(token){
      this.usuariosService.getByToken(token).subscribe(
        data => {
          if(data.tipoUsuario === 1){
            this.router.navigate(['/home']);    
          }          
        },
        err => {
          console.log(err.error.message);
          this.router.navigate(['/login']);  
        });
    } else {
      this.router.navigate(['/login']);
    }
    this.cursoService.getAll().subscribe(data => this.cursos = data);
    this.asignaturaService.getAll().subscribe(data => this.asignaturas = data);
  }

  findNotas(dniUsuario: string, nombreCurso: string, nombreAsignatura: string): void{    
    this.notaService.findNotas(dniUsuario, nombreCurso, nombreAsignatura).subscribe(
      data => {this.notas = data},
      err => {console.log(err.error)}
      );
  }

  addNotaSubmit(){
    console.log("Id curso: " + this.addCurso);
    console.log("Id asignatura: " + this.addAsignatura);
    
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

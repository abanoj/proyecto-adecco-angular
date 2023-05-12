import { Component } from '@angular/core';
import { FormGroup, FormControl} from '@angular/forms';

import { Nota } from '../nota';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent {

  notas: Nota[] = [];
  
  addNotaForm = new FormGroup ({
    alumno: new FormControl(''),
    curso: new FormControl(''),
    asignatura: new FormControl(''),
    nota: new FormControl(0),
  });

  addNotaSubmit(){
    const nota = new Nota(
      this.addNotaForm.value.alumno!,
      this.addNotaForm.value.curso!,
      this.addNotaForm.value.asignatura!,
      this.addNotaForm.value.nota!);
      
      this.notas.push(nota);
      this.addNotaForm.reset();
  };

  // alumno:String = "";
  // curso:String = "";
  // asignatura:String = "";
  // nota:number = 0;

  // addNota(){
  //   const n = new Nota(
  //     this.alumno,
  //     this.curso,
  //     this.asignatura,
  //     this.nota
  //   );
  //   this.notas.push(n);
  //   this.alumno = "";
  //   this.curso = "";
  //   this.asignatura = "";
  //   this.nota = 0;
  // }

}

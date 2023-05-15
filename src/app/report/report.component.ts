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
  myNota?: Nota;

  addNotaForm = new FormGroup ({
    alumno: new FormControl(''),
    curso: new FormControl(''),
    asignatura: new FormControl(''),
    nota: new FormControl(0),
  });

  editNotaForm = new FormGroup ({
    alumno: new FormControl(this.myNota?.alumno),
    curso: new FormControl(this.myNota?.curso),
    asignatura: new FormControl(this.myNota?.asignatura),
    nota: new FormControl(this.myNota?.nota),
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

  editNotaSubmit(){
    const currentNota = this.editNotaForm.value.nota;
    const element = this.notas.find(el => el.alumno === this.myNota?.alumno);
    if(currentNota && element){
      element.nota = currentNota;
    }
  }

  leerFila(nota: Nota){
    this.myNota = nota;
  }
}

import { Component } from '@angular/core';

import { Nota } from '../nota';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent {

  notas: Nota[] = []
  nota = new Nota("", "", "", 0);

  addNota(formData: any){
    this.nota = new Nota(
      formData.alumno,
      formData.curso,
      formData.asignatura,
      formData.nota
    );
    this.notas.push(this.nota);
  }

}

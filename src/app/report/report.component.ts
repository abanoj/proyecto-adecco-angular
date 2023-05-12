import { Component } from '@angular/core';

import { Nota } from '../nota';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent {
  notas: Nota[] = [
    { alumno: "Luke Skylwaker",
      curso: "Programación Web 2023",
      asignatura: "Java",
      nota: 9.5
    },
    { alumno: "Luke Skylwaker",
      curso: "Programación Web 2023",
      asignatura: "Javascript",
      nota: 8
    },
    {
      alumno: "Owen Lars",
      curso: "Programación Web 2023",
      asignatura: "SQL",
      nota: 7
    },
    {
      alumno: "Obi-Wan Kenobi",
      curso: "Programación Web 2023",
      asignatura: "Java",
      nota: 10
    }
  ]
}

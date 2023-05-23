import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Nota } from './nota';

@Injectable({
  providedIn: 'root'
})
export class NotaService {

  notaUrl = 'http://localhost:8080/api/nota/';

  constructor(private httpClient: HttpClient) { }

  public getByCursoAndAsignatura(idC: number, idA: number): Observable<Nota[]> {
    return this.httpClient.get<Nota[]>(this.notaUrl + `curso/${idC}/asignatura/${idA}`);
  }

  public getByCursoAndAlumno(idC: number, idA: number): Observable<Nota[]> {
    return this.httpClient.get<Nota[]>(this.notaUrl + `curso/${idC}/alumno/${idA}`);
  }

  public getByAsignaturaAndAlumno(idA: number, idU: number): Observable<Nota[]> {
    return this.httpClient.get<Nota[]>(this.notaUrl + `asignatura/${idA}/alumno/${idU}`);
  }

  public addNota(nota: Nota): Observable<any> {
    return this.httpClient.post<any>(this.notaUrl, nota);
  }

  public editNota(id: number, nota: Nota): Observable<any> {
    return this.httpClient.put<any>(this.notaUrl + id, nota);
  }

  public findNotas(dniUsuario: string, nombreCurso: string, nombreAsignatura: string): Observable<Nota[]>{
    const params = {dniUsuario, nombreCurso, nombreAsignatura}    
    return this.httpClient.get<Nota[]>(this.notaUrl, { params });
  }
}

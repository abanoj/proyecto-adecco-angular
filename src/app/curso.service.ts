import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Curso } from './curso';

@Injectable({
  providedIn: 'root'
})
export class CursoService {

  url = 'http://localhost:8080/api/curso/';

  constructor(private httpClient: HttpClient) { }

  public getAll(): Observable<Curso[]> {
    return this.httpClient.get<Curso[]>(this.url)
  }

  public getById(id: number): Observable<Curso> {
    return this.httpClient.get<Curso>(this.url + id);
  }

  public getByName(nombre: string): Observable<Curso> {
    return this.httpClient.get<Curso>(this.url + `nombre/${nombre}`);
  }
}

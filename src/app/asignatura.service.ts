import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Asignatura } from './asignatura';

@Injectable({
  providedIn: 'root'
})
export class AsignaturaService {

  url = 'http://localhost:8080/api/asignatura/';

  constructor(private httpClient: HttpClient) { }
  
  public getAll(): Observable<Asignatura[]> {
    return this.httpClient.get<Asignatura[]>(this.url);
  }

  public getById(id: number): Observable<Asignatura> {
    return this.httpClient.get<Asignatura>(this.url + id);
  }

  public getByName(name: string): Observable<Asignatura> {
    return this.httpClient.get<Asignatura>(this.url + `name/${name}`);
  }
}

import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Usuario } from './usuario';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class UsuariosService {
  
  usuarioURL = 'http://localhost:8080/api/usuario/';

  constructor(private httpClient: HttpClient) { }

  public allUsers(): Observable<Usuario[]> {
    return this.httpClient.get<Usuario[]>(this.usuarioURL + 'all');
  }

  public getOne(id: number): Observable<Usuario> {
    return this.httpClient.get<Usuario>(this.usuarioURL + id);
  }

  public getByDNI(dni: string): Observable<Usuario> {
    return this.httpClient.get<Usuario>(this.usuarioURL + `dni/${dni}`);
  }

  public getByUsername(username: string): Observable<Usuario> {
    return this.httpClient.get<Usuario>(this.usuarioURL + `username/${username}`);
  }

  public login(usuario: Usuario): Observable<any> {
    return this.httpClient.post<any>(this.usuarioURL + 'login', usuario);
  }

}

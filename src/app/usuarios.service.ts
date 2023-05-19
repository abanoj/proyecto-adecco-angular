import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Usuario } from './usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {
  items: any = [];

  constructor(private http: HttpClient) { }

  getUsuariosData(){
    return this.http.get('/assets/usuarios.json').subscribe(
      data => {
        console.log(data);        
      },
      error => {
        console.log(error);
        
      }
    );
  } 

  loginUsuario(body: object){
    this.http.post('http://localhost:8080/api/usuario/login', body, { responseType: 'text'}).subscribe(
      (token: string) => {
        console.log('Token Auth: ', token);
        localStorage.setItem('authToken', token);        
      },
      error => {
        console.log("Login error: ", error);
      }
    );
  }
}

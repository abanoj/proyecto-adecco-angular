import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Usuario } from './usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {
  items: any = [];

  constructor(private http: HttpClient) { }


  addToUsuarios(usuario: Usuario) {
    this.items.push(usuario);
  }

  getUsuarios(){
    return this.items;
  }

  clearUsuarios(){
    this.items = [];
    return this.items;
  }

  getUsuariosData(){
    return this.http.get('/assets/usuarios.json');
  }  
}

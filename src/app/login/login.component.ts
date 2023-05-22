import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UsuariosService } from '../usuarios.service';
import { Usuario } from '../usuario';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  username: string = '';
  password: string = '';

  constructor(private http: HttpClient,
              private usuariosServices: UsuariosService){}

  loginUser(){
    const usuario = new Usuario(this.username, this.password);
    this.usuariosServices.login(usuario).subscribe(
      data => {
        console.log(data);        
      },
      err => {
        console.log(err.error);
      }
    );
  }

}

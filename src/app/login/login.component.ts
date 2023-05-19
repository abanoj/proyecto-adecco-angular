import { Component } from '@angular/core';
import { FormGroup, FormControl} from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { UsuariosService } from '../usuarios.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  hola: string = '';

  constructor(private http: HttpClient,
              private usuariosServices: UsuariosService){}

  loginForm = new FormGroup({
    username: new FormControl(''),
    password: new FormControl('')
  });

  checkLogin(){
    const username = this.loginForm.get('username')?.value;
    const password = this.loginForm.get('password')?.value;
    const body = {"username": username, "contrasena": password}
    this.usuariosServices.loginUsuario(body);
  }
}

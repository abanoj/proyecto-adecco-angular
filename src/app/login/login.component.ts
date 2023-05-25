import { Component } from '@angular/core';
import { Router } from '@angular/router';

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

  constructor(private usuariosServices: UsuariosService,
              private router: Router){}

  loginUser(){
    const usuario = new Usuario(this.username, this.password);
    this.usuariosServices.login(usuario).subscribe(
      data => {
        const token = data.token;
        localStorage.setItem('token', token);
        this.router.navigate(['/profile']);  
      },
      err => {
        console.log(err.error);
      }
    );
  }

  ngOnInit(){
    if(localStorage.getItem('token') !== null){
      this.router.navigate(['/profile']);
    }
  }

}

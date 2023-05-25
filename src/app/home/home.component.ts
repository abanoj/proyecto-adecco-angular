import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UsuariosService } from '../usuarios.service';
import { Usuario } from '../usuario';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  
  usuario!: Usuario;

  constructor(
    private router: Router,
    private usuariosService: UsuariosService
    ){}

  ngOnInit(){
    const token = localStorage.getItem('token');
    if(token){
      this.usuariosService.getByToken(token).subscribe(
        data => {
          this.usuario = data;
        },
        err => {
          console.log(err.error.message);
          this.router.navigate(['/login']);  
        });
    } else {
      this.router.navigate(['/login']);
    }
  }
}

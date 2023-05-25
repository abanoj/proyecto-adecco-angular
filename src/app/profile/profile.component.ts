import { Component } from '@angular/core';
import { Usuario } from '../usuario';
import { UsuariosService } from '../usuarios.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})

export class ProfileComponent {
  usuario!: Usuario;
  curso: String = "Programación Web FullStack";
  promedio: number = 10;

  constructor(
    private usuariosService: UsuariosService,
    private router: Router
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

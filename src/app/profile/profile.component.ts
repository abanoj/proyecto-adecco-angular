import { Component } from '@angular/core';
import { Usuario } from '../usuario';
import { UsuariosService } from '../usuarios.service';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})

export class ProfileComponent {
  usuario!: Usuario;
  curso: String = "Programación Web FullStack";
  promedio: number = 10;

  constructor(private usuariosService: UsuariosService){}

  ngOnInit(){
    this.usuariosService.getOne(1).subscribe(
      data => {
        this.usuario = data;
      },
      err => {
        console.log(err.err);
      }
    );
  }
}

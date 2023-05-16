import { Component } from '@angular/core';
import { Usuario } from '../usuario';
import { UsuariosService } from '../usuarios.service';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})

export class ProfileComponent {
  usuarios: any;

  constructor(private usuariosService: UsuariosService){}

  usuario: Usuario = {
    dni: "86257123N",
    nombre: "Luke",
    apellido: "Skywalker",
    username: "lskywalker",
    password: "l21sa@848$",
    telefono: 612345678,
    email: "lskywalker@mail.com",
    direccion: "Tatooine",
    tipo: 1,
    activo: true
  }

  curso: String = "Programación Web FullStack";
  promedio: number = 10;

  ngOnInit(){
    this.usuarios = this.usuariosService.getUsuariosData();
    console.log(this.usuarios);
  }
}

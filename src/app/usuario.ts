export class Usuario {
  id?: number;
  dni?: String;
  nombre?: String;
  apellido?: String;
  email?: String;
  username: String;
  contrasena: String;
  foto?: String;
  direccion?: String;
  telefono?: number;
  tipo?: number;
  activo?: boolean;

  constructor(username: string, password: string){
    this.username = username;
    this.contrasena = password;
  }
}

export interface Usuario {
  dni: String;
  nombre: String;
  apellido: String;
  email: String;
  username: String;
  password: String;
  foto?: String;
  direccion?: String;
  telefono?: number;
  tipo: number;
  activo: boolean;
}

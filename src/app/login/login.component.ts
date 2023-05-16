import { Component } from '@angular/core';
import { FormGroup, FormControl} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  loginForm = new FormGroup({
    username: new FormControl(''),
    password: new FormControl('')
  });

  checkLogin(){
    console.log("Usuario: " + this.loginForm.get('username')?.value);
    console.log("Contraseña: " + this.loginForm.get('password')?.value);
    
  }
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})

export class ProfileComponent {
  nombre: String = "Luke"
  apellido: String = "Skywalker"
  email: String = "lskywalker@mail.com"
  phone: number = 612345678;
  address: String = ""
}

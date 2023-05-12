import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'proyecto-angular';
  // Para que el menu desplegable cierre al hacer click con routerlink
  @ViewChild('navbarCollapse', { static: false}) navbarCollapse!: ElementRef;

  cerrarMenu() {
    this.navbarCollapse?.nativeElement.classList.remove('show');
  }
}

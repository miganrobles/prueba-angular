import { Component } from '@angular/core';
import { MicomponenteComponent } from './components/micomponente/micomponente.component'; 
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  nombreProyecto = 'Mi proyecto angular-prueba';
  descripcion = 'Esto es una clase rápida de angular';
  profesor = 'Pepe';
}

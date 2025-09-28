import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-micomponente22',
  templateUrl: './micomponente.component.html',
  styleUrls: ['./micomponente.component.css']
})
export class MicomponenteComponent implements OnInit {

  constructor() { }
  videoJuegos: string [] = [];

  nuevoJuego: string = "";
  ngOnInit() {
  }

  addJuego() {
    if(this.nuevoJuego && this.nuevoJuego.trim()) {
      this.videoJuegos.push(this.nuevoJuego.trim());
      this.nuevoJuego = "";
    }
  }

}

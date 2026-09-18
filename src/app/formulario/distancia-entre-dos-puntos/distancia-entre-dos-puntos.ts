import { Component } from '@angular/core';

@Component({
  selector: 'app-distancia-entre-dos-puntos',
  standalone: false,
  templateUrl: './distancia-entre-dos-puntos.html',
  styleUrl: './distancia-entre-dos-puntos.css',
})
export class DistanciaEntreDosPuntos {
  x1: number = 0;
  y1: number = 0;

  x2: number = 0;
  y2: number = 0;


  distancia: number = 0;

  CalcularDistancia():void{
    this.distancia = Math.sqrt(
      Math.pow(this.x2 - this.x1, 2) + Math.pow(this.y2 - this.y1, 2)
    );
  }
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-triangulopuntos',
  standalone: false,
  templateUrl: './triangulopuntos.html',
  styleUrl: './triangulopuntos.css',
})
export class Triangulopuntos {
  x1: number = 0;
  y1: number = 0;

  x2: number = 0;
  y2: number = 0;

  x3: number = 0;
  y3: number = 0;

  area: number = 0;
  FormaTriangulo: boolean = false;
  TipoTriangulo: string = ''


  AnalizarPuntos(): void {

  let resultado: number = 0;
  this.TipoTriangulo = '';

  resultado =
    this.x1 * (this.y2 - this.y3) +
    this.x2 * (this.y3 - this.y1) +
    this.x3 * (this.y1 - this.y2);

  if (resultado == 0) {

    this.FormaTriangulo = false;
    this.area = 0;


  } else {

    this.FormaTriangulo = true;

    if (resultado < 0) {
      resultado = resultado * -1;
    }

    this.area = resultado / 2;

    let ladoAB: number = 0;
    let ladoBC: number = 0;
    let ladoCA: number = 0;

    ladoAB =
      (this.x2 - this.x1) * (this.x2 - this.x1) +
      (this.y2 - this.y1) * (this.y2 - this.y1);

    ladoBC =
      (this.x3 - this.x2) * (this.x3 - this.x2) +
      (this.y3 - this.y2) * (this.y3 - this.y2);

    ladoCA =
      (this.x1 - this.x3) * (this.x1 - this.x3) +
      (this.y1 - this.y3) * (this.y1 - this.y3);

    if (ladoAB == ladoBC && ladoBC == ladoCA) {
      this.TipoTriangulo = 'Equilatero';

    } else if (
      ladoAB == ladoBC ||
      ladoBC == ladoCA ||
      ladoAB == ladoCA
    ) {
      this.TipoTriangulo = 'Isosceles';

    } else {
      this.TipoTriangulo = 'Escaleno';
    }

  }

}



}

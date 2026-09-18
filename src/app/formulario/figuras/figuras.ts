import { Component } from '@angular/core';

@Component({
  selector: 'app-figuras',
  standalone: false,
  templateUrl: './figuras.html',
  styleUrl: './figuras.css',
})
export class Figuras {
  base: string = '';
  altura: string = '';
  opcionSeleccionada: string = 'rectangulo';

  resultadorectangulo: number = 0;
  resultadocuadrado: number = 0;
  resultadotriangulo: number = 0;
  resultadopentagono: number = 0;
  resultadocirculo: number = 0;

  calcular(): void {
    switch (this.opcionSeleccionada) {
      case 'rectangulo':
        this.rectangulo();
        break;
      case 'cuadrado':
        this.cuadrado();
        break;
      case 'triangulo':
        this.triangulo();
        break;
      case 'pentagono':
        this.pentagono();
        break;
      case 'circulo':
        this.circulo();
        break;
    }
  }


  rectangulo(): void {
    this.resultadorectangulo = parseFloat(this.base) * parseFloat(this.altura);
  }


  cuadrado(): void {
    const lado = parseFloat(this.base);
    this.resultadocuadrado = lado * lado;
  }


  triangulo(): void {
    this.resultadotriangulo = (parseFloat(this.base) * parseFloat(this.altura)) / 2;
  }


  pentagono(): void {
    const lado = parseFloat(this.base);
    this.resultadopentagono = lado * 5;
  }


  circulo(): void {
    const radio = parseFloat(this.base);
    this.resultadocirculo = Math.PI * Math.pow(radio, 2);
  }
}

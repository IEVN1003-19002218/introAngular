import { Component } from '@angular/core';

@Component({
  selector: 'app-operas-bas',
  standalone: false,
  templateUrl: './operas-bas.html',
  styleUrl: './operas-bas.css',
})
export class OperasBas {
  num1: string = '';
  num2: string = '';
  opcionSeleccionada: string = 'suma';

  resultadosum: number = 0;
  resultadores: number = 0;
  resultadomulti: number = 0;
  resultadodiv: number = 0;

  calcular(): void {
    if (this.opcionSeleccionada === 'suma') {
      this.sumar();
    } else if (this.opcionSeleccionada === 'resta') {
      this.restar();
    } else if (this.opcionSeleccionada === 'multiplicar') {
      this.multiplicar();
    } else if (this.opcionSeleccionada === 'dividir') {
      this.dividir();
    }
  }

  sumar(): void {
    this.resultadosum = parseInt(this.num1) + parseInt(this.num2);
  }

  restar(): void {
    this.resultadores = parseInt(this.num1) - parseInt(this.num2);
  }

  multiplicar(): void {
    this.resultadomulti = parseInt(this.num1) * parseInt(this.num2);
  }

  dividir(): void {
    const n2 = parseInt(this.num2);
    this.resultadodiv = n2 !== 0 ? parseInt(this.num1) / n2 : 0;
  }
}




import { Component } from '@angular/core';

@Component({
  selector: 'app-palindromo',
  standalone: false,
  templateUrl: './palindromo.html',
  styleUrl: './palindromo.css',
})
export class Palindromo {

  palabra: string = '';
  NumeroDeVocales: number = 0;
  NumeroDeConsonantes: number = 0;
  EsPalindromo: boolean = false;

  Analizarlafrase(): void {

  this.NumeroDeVocales = 0;
  this.NumeroDeConsonantes = 0;

  let Palabralimpia = '';
  let PalabraInvertida = '';

  for (let letra of this.palabra) {

    if (letra != ' ') {

      Palabralimpia += letra;
      PalabraInvertida = letra + PalabraInvertida;

      if (
        letra == 'a' ||
        letra == 'e' ||
        letra == 'i' ||
        letra == 'o' ||
        letra == 'u'
      ) {
        this.NumeroDeVocales++;
      } else {
        this.NumeroDeConsonantes++;
      }

    }

  }

  if (Palabralimpia != PalabraInvertida) {
    this.EsPalindromo = false;
  } else {
    this.EsPalindromo = true;
  }

  }
}

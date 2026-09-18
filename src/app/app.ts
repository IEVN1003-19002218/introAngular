import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: false,
  styleUrl: './app.css'
})
export class App {
   title:string = 'Edgar David Martinez Gonzalez'

   duplicarnumero(a:number):number{
    return a*2
   }

   pelicula={
    titulo:'Hola mundo',
    fechaLanzamiento: new Date(),
    precio: 2353
   }

}

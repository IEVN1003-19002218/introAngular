import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  standalone: false,
  templateUrl: './heroes-list.html',
  styleUrl: './heroes-list.css',
})
export class HeroesList {

  imageWidth:number=40;
  imageMargin:number=2;
  muestraImagen:boolean=true;
  listFilter:string='';
  showImage():void{

    this.muestraImagen=!this.muestraImagen;
  }

  heroes:any[]=[{
    imagen:"https://dragonball-api.com/characters/goku_normal.webp",
    nombre:'Goku',
    Descripcion:'Kame hame ha',
    race:'Saiyan',
    ki:9000
  },
  {
    imagen:"https://dragonball-api.com/characters/picolo_normal.webp",
    nombre:'Piccolo',
    Descripcion:'Makankosappo',
    race:'Namek',
    ki:8000
  },
  {
    imagen:"https://dragonball-api.com/characters/Freezer.webp",
    nombre:'Freezer',
    Descripcion:'Death Ball',
    race:'Alien',
    ki:9500
  },
  {
    imagen:"https://dragonball-api.com/characters/vegeta_normal.webp",
    nombre:'Vegetta',
    Descripcion:'Final Flash',
    race:'Saiyan',
    ki:8500

  }]
}

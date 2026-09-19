import { Component } from '@angular/core';

@Component({
  selector: 'app-validaciondeusuarioycontrasena',
  standalone: false,
  templateUrl: './validaciondeusuarioycontrasena.html',
  styleUrl: './validaciondeusuarioycontrasena.css',
})
export class Validaciondeusuarioycontrasena {
  Usuario:string = '';
  contrasena:string ='';

  UsuarioCorrecto:string = 'david'
  ContrasenaCorrecta:string = '123'

  Mensaje:string = ''


  ValidarUsuario(): void{
    if(this.Usuario != this.UsuarioCorrecto){
    this.Mensaje = 'El nombre de usuario no es valido'
  } else if(this.contrasena != this.ContrasenaCorrecta){
    this.Mensaje = 'La contraseña no es valida';


  }else{
    this.Mensaje = 'Bienvenido de vuelta,' + this.Usuario
  }
}

}


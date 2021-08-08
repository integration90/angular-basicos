import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  titularidad = 'Registro de Usuarios';
  mensaje= "";
  registrado=false;
  nombre:String="";
  apellido:String="";
  cargo:string="";
  //si declaras un objet any array tienes que inicializarlo en el clase constructor.
  entradas: any;


  constructor(){

    this.entradas=[

      {titulo:"En el nombre de la rosa"},
      {titulo:"el fary"},
      {titulo:"xuxina nadando"},
      {titulo:"kotlin potencia para tus Apps"},
      {titulo:"¿Donde quedo Pascal?"},
    ]
  }

  registrarUsuario (){

    this.mensaje="Usuario Registrado correctamente";
    this.registrado=true;

  }
}

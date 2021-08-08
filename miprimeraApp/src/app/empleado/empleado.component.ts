import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-empleado',
  templateUrl: './empleado.component.html',
  //puedes hacerlo en line (si la aplicacion es simple .. se puede hacer todo aqui)
  //template :"<p>Aqui iria un empleado ok ------></p>",
  styleUrls: ['./empleado.component.css']
  //styles:["p{background-color:red;}"]
})
export class EmpleadoComponent implements OnInit {

  nombre ="juan";

  apellido="alvarez";
  //di la hacemos privada hariamos esto:
  //private edad=20;
  edad=20;
  empresa="Google";
  /*di es privada tendriamos que retornar getter
  getEdad () {
  
    return this.edad;

  }*/
  //binding - crear puentes
  habilitacionCuadro=false;

  usuResgistrado=true;
  textoDeRegistro="no hay nadie registrado";
/*
  cambiaEmpresa(event:Event){

    this.empresa=(<HTMLInputElement>event.target).value;

  }*/

  getRegistroUsuario(){

    this.usuResgistrado=false;
  }

  setUsuarioRegistrado(event:Event){

    //alert ("El usuario esta regitrado");
    
    //this.textoDeRegistro="El usuario se acaba de registrar";

    if((<HTMLInputElement>event.target).value=="si"){

       this.textoDeRegistro="El usuario se acaba de registrar";

     }else{

       this.textoDeRegistro="no hay nadie registrado"; 
  }
    

  }


  //metodo para se limite al recibir el String del valor
  llamaEmpresa(value:String){


  }


  constructor() { }

  ngOnInit(): void {
  }

}

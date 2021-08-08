import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  
})

//ciclos de vida - son metodos que lanza de manera automatica
export class ListadoComponent implements OnInit {

  constructor() { }

  heroes: string []=['Spiderman','Iroman','Hulk','Thor','Capitan America'];

  heroeBorrado : string ='';



  //iniciar cosas servicios etc...
  ngOnInit(): void {
   
  }
    borrarHeroe (){

      //borrar el primer elemento del array
        
        this.heroeBorrado=this.heroes.shift() ||'';
    }
}

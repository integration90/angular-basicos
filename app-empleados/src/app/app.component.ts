import { Component, OnInit } from '@angular/core';
import { Empleado } from './empleado.model';
import { EmpleadosService } from './empleados.service';
import { ServicioEmpleadosService } from './servicio-empleados.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  titulo = 'Listado de Empleados: ';


  //acabamos de injectar en el componente principal el servicio

    constructor(private miServicio:ServicioEmpleadosService,private empleadosService:EmpleadosService){

      //acudir al servicio, alameceno toda la informacion
      //this.empleados=this.empleadosService.empleados;


    }


  ngOnInit(): void {
    this.empleados=this.empleadosService.empleados;
  }

    //hay que tener declado el array vacio en este sitio si no da error.
    empleados:Empleado[]=[];
  
  
  agregarEmpleado(){


    if (this.cuadroNombre!="") {
        
          let miEmpleado = new Empleado (this.cuadroNombre,this.cuadroApellido,this.cuadroCargo,this.cuadroSalario);
          //creamos un servicio de Arry de mensajes alert.
          this.miServicio.muestraMensaje("Nombre del empleado: " + miEmpleado.nombre);

          //llamamos al servicio para agregar al array
          this.empleadosService.agregarEmpleadoServicio(miEmpleado);
          this.cuadroNombre="";
          this.cuadroApellido="";
          this.cuadroCargo="";
          this.cuadroSalario=0;

    }


  }


  cuadroNombre:string="";
  cuadroApellido:string="";
  cuadroCargo:string="";
  cuadroSalario:number=0;

 
}

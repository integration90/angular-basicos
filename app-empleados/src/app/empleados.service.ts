//crear un servcicio de DataService.

import { Empleado } from "./empleado.model";

export class EmpleadosService {


      //creamos un array para empleados
  empleados:Empleado[]=[


    new Empleado ("José","Ablanedo","Presidente",7500),
    new Empleado ("Pepe","fernadez","Director",3000),
    new Empleado ("Maria","Zuñiga","Administrativa",2000),
    new Empleado ("Pedro","Fernadez","Operador",1500),
    new Empleado ("Xuxina","Zuñiga","Trilera",9500),
  ];

    //metodo agregar Array
  agregarEmpleadoServicio(empleado:Empleado){

    this.empleados.push(empleado);

  }

}
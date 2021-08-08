import { EventEmitter } from '@angular/core';
import { Output } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { ServicioEmpleadosService } from '../servicio-empleados.service';

@Component({
  selector: 'app-caracteristicas-empleado-c',
  templateUrl: './caracteristicas-empleado-c.component.html',
  styleUrls: ['./caracteristicas-empleado-c.component.css']
})
export class CaracteristicasEmpleadoCComponent implements OnInit {

  @Output() caracteristicasEmpleados = new EventEmitter<string>();
  

        //acabamos de injectar en el componente principal el servicio        
        constructor(private miServicio:ServicioEmpleadosService) {



        }

  ngOnInit(): void {
  }

  agregarCaracteristica(value: string) {
    this.miServicio.muestraMensaje("Caracteristica: " + value);
    this.caracteristicasEmpleados.emit(value);
  }

}

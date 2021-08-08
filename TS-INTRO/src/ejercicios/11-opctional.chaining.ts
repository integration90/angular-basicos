



interface Pasajero {

    nombre:string;
    hijos?:string [] //? esta propiedad es opcional
}

const pasajero1:Pasajero ={


    nombre:'Fernado'
    

}

const pasajero2:Pasajero ={


    nombre:'Fernado',
    hijos: ['Natalia','gabriel']

}

function imprimeHijos (pasajero: Pasajero): void{

     /*
        De esta mandera lo que  hacemos es poner que hijo si es undefine
        que no esta definido, me lo compruebe igual ? y aparte si es asi 
        || -> que me ponga que es 0

        Seria asi si existe los hijos? -- dime cuantos hoy ... y si es undefine ponme 0
    */

    const cuantoHijos =pasajero.hijos?.length || 0; 

   

    console.log (cuantoHijos);


}



imprimeHijos (pasajero1);






function sumar (a: number,b: number): number{

    return a + b;
}


const sumarFlecha = (a: number,b:number):number => {

    return a + b;
}


// pimero van los obligatorios y despues los paramentros opciones ?
function multiplicar (numero: number,otronumero?: number,base: number=2 ): number {

    return numero * base ;

}

//clases tontas... no sabes como funciona los metodos
interface PersonsajeLOR{

    nombre: string;
    pv: number;
    //declarar funcion
    mostrarHp : () => void;



}



function currar (personaje: PersonsajeLOR,currarX:number): void{


        personaje.pv += currarX;

        console.log (personaje);
        



}


const nuevoPersonaje : PersonsajeLOR={

        nombre: 'Pepe',

        pv:50,
        
        mostrarHp(){

            console.log ('Puntos de vida :' + this.pv);

        }


}


currar (nuevoPersonaje,20);


nuevoPersonaje.mostrarHp();

//const resultado = sumar (20,12);

//const multi = multiplicar (50,10);


//console.log (resultado);

//console.log (multi);


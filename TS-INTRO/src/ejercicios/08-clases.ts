class PersonaNormal {


    constructor (public nombre: string,
                public direccion:string
             ) {}
}


class Heroe extends PersonaNormal { //las clases sirven para crear instancias

   
   // alterEgo:string;
     //edad : number;
     //nombreReal:string; //si pusiera static delante voy ha poder acceder al valor de esa propiedad sin crear un instancia

     constructor(
        public alterEgo: string,
        public edad : number,
        public nombreReal:string
     ){

        super(nombreReal,'New york, Usa');
     }


   
}

interface Personaje2 {//las interfaces no tiene codigo en java

    alterEgo?:string;
    edad ?: number;
    nombreReal?:string;

       
}

const ironman = new Heroe('Superman',21,'Tony'); //instanciamos la clase
const spiderman: Personaje2={};

console.log (ironman);


 

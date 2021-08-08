

interface Reproductor{
    volumen:number;
    segundo:number;
    cancion:string;
    detalles:Detalles;
}

interface Detalles{
autor:string;
anio:number;
}

const reproductor : Reproductor={


volumen: 90,
segundo: 40,
cancion: 'Mess',
detalles: {

    autor:'Queen',
    anio: 2010
}



}
const autor = 'pepe';


//destructuracion
const { volumen,segundo,cancion,detalles:{autor : autorDetalle ,anio: anioDetalle}}=reproductor;

//mejor forma Esta
//const {autor,anio}= detalles;
/*
console.log('el volumen actual de: ',volumen);
console.log('el segundo actual de: ',segundo);
console.log('La cancion actual de: ',cancion);
console.log('el autor es: ',autorDetalle);
console.log('el años cancion es: ',anioDetalle);
*/
const dbz:string[]=['Goku','Vengeta','Trunks'];
const [,,p3]=dbz;

//console.log('Personaje1 :', p1);
//console.log('Personaje2 :', p2);
console.log('Personaje3 :', p3);
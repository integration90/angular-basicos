

interface SuperHeroe{
    nombre: string;
    edad:number;
    direccion: Direccion;
    mostrarDireccion: () => string;


}

interface Direccion{

        calle:string;
        pais:string;
        ciudad:string; 
        numero:number;


}


const superHeroe: SuperHeroe={
    nombre:'Spiderman',
    edad:30,

    direccion:{
        calle: 'Main St',
        pais: 'Usa',
        ciudad:'NY',
        numero:3

    },

    mostrarDireccion(){

        return this.nombre+','+this.direccion.ciudad+','+this.direccion.pais + ',' + this.direccion.numero;
    }  

}

const direccion= superHeroe.mostrarDireccion();
console.log(direccion);

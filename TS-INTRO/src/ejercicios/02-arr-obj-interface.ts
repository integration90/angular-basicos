
/*
    ===== Código de TypeScript =====
*/


let habiliadades: string[] =['bash','contador','pedrin'];


//no existen en javascript 
interface Personaje  {

    nombre: String;
    hp: number;
    habilidades: string[];

    //para decir que pueblo natal es opcion declarlo en el interface pones ? despues de la variable
    puebloNatal?: string;

}

const personaje: Personaje  = {

    nombre: 'Strider',
    hp: 100,
    habilidades: ['pepe','Aldredo','Tonto el culo']

}

personaje.puebloNatal='Pueblo Natal';

console.table (personaje);



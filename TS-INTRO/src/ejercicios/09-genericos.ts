


function queTiposoy<T>(argumento: T){

    return argumento;
}


let soyString = queTiposoy ('hola mundo');
let soyNumero = queTiposoy (100);
let soyArreglo = queTiposoy ([1,2,3,4,5,6]);

let soyExplicito = queTiposoy<string>('Hola');

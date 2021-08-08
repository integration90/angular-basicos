


export interface Producto {
    des:string;
    precios:number;

}

const telefono : Producto = {

    des: 'Nokia A1',
    precios:350

}

const tablet : Producto ={
    des: 'Ipad Air',
    precios:650


}

export function calculaISV (productos : Producto []):[number,number]  {

    let total = 0;

    productos.forEach(({precios})=>{

        total+= precios;

    })

    return [total,total * 0.21];
}

const articulos = [telefono,tablet];
const [total,isv]= calculaISV (articulos);
console.log ('ISV:',total);
console.log ('ISV:',isv);
import { calculaISV, Producto } from "./06-desestructuracion-function";


const carritoCompras: Producto[] =[
    {
    des:'telefono 1',
    precios:100
    },
    {
        des:'telefono 2',
        precios:150

    }
];

const [total,isv] =calculaISV (carritoCompras);
console.log('Total',total);
console.log('ISV',isv);


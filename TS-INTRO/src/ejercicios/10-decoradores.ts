

function ClassDecorator<T extends { new (...args: any[]): {} }>(constructor: T) {
    return class extends constructor {
      reportingURL = "http://www...";
      hello='hola';
    };
  }


  @ClassDecorator //un decorador es un funcion que expande su clase añadiendo funcionalidades especiales
class MiSuperClase{
    public miPropiedad: string ='ABCDE';

        imprimir(){

            console.log ('Hola mundo');

        }

} 

console.log (MiSuperClase);

const miClase = new MiSuperClase();

console.log(miClase.miPropiedad);

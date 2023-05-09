// Ejercicio N° 1:

function piramide(numero) {
  numeros = [];
  for (i = 1; i <= numero; i++) {
    numeros.push(i);
    contador = numero + console.log(numeros);
  }
  return contador;
}

piramide(6);
piramide(3);

// Ejercicio N° 2:

function comparar(array1, array2) {
  coincidencias = [];
  for (i = 0; i < array1.length; i++) {
    for (j = 0; j < array2.length; j++) {
      if (array2[j] === array1[i]) {
        coincidencias.push(array2[j]);
      }
    }
  }
  return console.log(coincidencias);
}

array1 = ["rojo", "azul", "amarillo"];
array2 = ["blanco", "negro", "rojo"];

comparar(array1, array2);

array1= [4, 3, true, 'manzana']
array2= ['pera', 3, false, true, 3, true]

comparar(array1, array2);

// Ejercicio N° 3:
// Punto 1:
let carrito = {
  montoTotal: 10,
  productos: ["Leche"]
}

class Carrito {
  constructor(montoTotal,productos){
    this.montoTotal=montoTotal;
    this.productos=productos;
  }
}
//Punto 2:
class Carrito {
  constructor(montoTotal,productos){
    this.montoTotal=montoTotal;
    this.productos= productos;
  }

agregarProducto(nombre, precio, unidades){
  this.montoTotal=this.montoTotal+ (precio +  unidades)
  this.productos =nombre;
}
}
agregarProducto("Azucar", 5, 2);

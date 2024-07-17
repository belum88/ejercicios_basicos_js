const jedi = {nombre: "Luke Skywalker", edad: 19};

// Actualizar la edad de Luke Skywalker
jedi.edad = 25;

console.log(jedi); 

// Datos de Leia Organa
const nombre = "Leia";
const apellido = "Organa";
const edad = 20;

// Mensaje de presentación
console.log("Soy " + nombre + " " + apellido + ", tengo " + edad + " años y soy una princesa de Alderaan.");

// Datos de los sables de luz
const sable1 = {nombre: "Shoto de Yoda", precio: 1500};
const sable2 = {nombre: "Sable de Darth Vader", precio: 2000};

// Cálculo del precio total de los sables de luz
const precioTotalSables = sable1.precio + sable2.precio;
console.log("El precio total de los sables de luz es: " + precioTotalSables + " créditos.");

// Modificación del valor de la variable global precioBaseGlobal
let precioBaseGlobal = 25000;

// Actualización del precio final de las naves
const nave1 = {nombre: "Ala-X", precioBase: 50000, precioFinal: 60000};
const nave2 = {nombre: "Halcón Milenario", precioBase: 70000, precioFinal: 80000};

nave1.precioFinal = nave1.precioBase + precioBaseGlobal;
nave2.precioFinal = nave2.precioBase + precioBaseGlobal;

console.log(nave1 );
console.log(nave2);


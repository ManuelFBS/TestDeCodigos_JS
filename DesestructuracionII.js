// Omitiendo elementos en un arreglo...
let introduccion = [ 'Hola', 'Yo', 'Soy', 'Manuel' ];

let [ saludo, , , nombre ] = introduccion;

console.log(saludo);
console.log(nombre);
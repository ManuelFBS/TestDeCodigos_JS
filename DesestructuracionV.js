// Desestructuracion en funciones...
function obtenerArreglo() {
        return [ 'Hola', 'Yo', 'Soy', 'Manuel' ];
}

let [ saludo, , verbo, nombre ] = obtenerArreglo();

console.log(saludo);
console.log(verbo);
console.log(nombre);
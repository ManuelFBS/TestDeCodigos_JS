// Resto (...rest) en la Desestructuración de Objetos
/*La sintaxis de resto también se puede utilizar para recopilar claves de 
propiedad que aún no han sido asignadas durante la desestructuración. 
Dichas claves y sus valores se copian en un nuevo objeto:*/

let persona  = {
        nombre: "Sarah", 
        lugar: {
                pais: "Australia", 
                ciudad: "Alice Springs"
        }, 
        amigas: [ "Angie", "Becky" ]
};

let { nombre, amigas, ...otras } = persona;

console.log(nombre);
console.log(amigas);
console.log(otras);
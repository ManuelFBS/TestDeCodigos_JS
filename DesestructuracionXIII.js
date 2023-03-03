// Combinando Arreglos con Objetos
/*Las arreglos también se pueden usar con 
objetos en la desestructuración de objetos:*/

let persona = {
        nombre: "Sarah", 
        pais: "Nigeria", 
        amigas: ["Annie", "Becky"],
};

let { nombre: nomb, amigas: bar } = persona;

console.log(nomb);
console.log(bar);
// Anidamiento en la Desestructuración de Objetos
// Los objetos también se pueden anidar al desestructurar:

let persona  = {
        nombre: "Sarah", 
        lugar: {
                pais: "Australia", 
                ciudad: "Alice Springs"
        }, 
        amigas: [ "Angie", "Becky" ]
};

let { 
        nombre: nomb, 
        lugar: { pais: bar, ciudad: x }, 
} = persona;

console.log(nomb);
console.log(bar);
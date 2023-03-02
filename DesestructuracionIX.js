// Declarando variables antes de ser asignadas...
let persona = {
        nombre: 'Marcos', 
        pais: 'Venezuela', 
        trabajo: 'Desarrollador'
};

let nombre, pais, trabajo;

({ nombre, pais, trabajo } = persona);

console.log(nombre);
console.log(pais);
console.log(trabajo);
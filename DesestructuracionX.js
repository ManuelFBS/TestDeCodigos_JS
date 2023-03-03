// Usando un nuevo Nombre de Variable...
/* Si queremos asignar valores de un objeto a una nueva 
 * variable en lugar de usar el nombre de la propiedad, 
 * podemos hacer esto: */

let persona = {
        nombre: 'Marcos', 
        pais: 'Venezuela', 
        trabajo: 'Desarrollador'
};

let { nombre: nam, trabajo: job } = persona;

console.log(nam);
console.log(job);
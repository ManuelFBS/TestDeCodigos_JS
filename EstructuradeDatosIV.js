// *** Algoritmos de JS y Estructura de Datos ***
/*Escribe declaraciones concisas de objecto literales 
usando la abreviatura de propiedad de objeto*/

// const createPerson = (name, age, gender) => {
//         // Cambia solo el código debajo de esta línea
//         return {
//           name: name,
//           age: age,
//           gender: gender
//         };
// };

// Resumiendo y optimizando el código de arriba...
const createPerson = (name, age, gender) => ({ name, age, gender });

const person = createPerson('Manuel', 61, 'masculino');

console.log(person);
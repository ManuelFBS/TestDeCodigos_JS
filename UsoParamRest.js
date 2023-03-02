// const sum = (x, y, z) => {
//         const args = [x, y, z];
//         return args.reduce((a, b) => a + b, 0);
// }

// El uso del parámetro 'rest' [... (3 puntos)]. El ejemplo de abajo
// simplifica la función de arriba...
const sum = (...args) => {
        return args.reduce((a, b) => a + b, 0);
}

console.log(sum(7, 9, 15));
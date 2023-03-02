// const incrementar = (numero, valor) => numero + valor;     // Con ambos parámetros especificados...
// const incrementar = (numero, valor = 1) => numero + valor;     // Cuando no se especifica el parámetro 'valor'

const incrementar = (numero, valor) => valor !== undefined ? numero + valor : numero + 1;

// let increm = incrementar(11);     // Sin valor de 2do parámetro... Sin especificar...
let increm = incrementar(17);

console.log(increm);
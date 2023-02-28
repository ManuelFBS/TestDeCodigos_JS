function rangoDeNumeros(numInicio, numFin) {
        if (numFin < numInicio) return [];
        else {
                const numeros = rangoDeNumeros(numInicio, numFin - 1);
                numeros.push(numFin);
                return numeros;
        }
}

const nroIni = 5;
const nroFin = 17;
let arr = rangoDeNumeros(nroIni, nroFin);

console.log(arr);
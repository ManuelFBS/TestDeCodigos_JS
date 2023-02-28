function rangoDeNumeros(numInicio, numFin) {
        return numFin < numInicio 
        ? [] 
        : rangoDeNumeros(numInicio, numFin - 1).concat(numFin);
}

const nroIni = 5;
const nroFin = 17;
let arr = rangoDeNumeros(nroIni, nroFin);

console.log(arr);
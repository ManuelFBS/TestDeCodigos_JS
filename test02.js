function loboEstaONoEsta(array) {
        // La funcion recibe un array 'array' de strings y numeros  como parametro
        // la funcion debe retornar true o false dependiendo de si 'lobo' esta en el array o no
        // Por ej:
        // loboEstaONoEsta(['hola', 1, 3,  'palabra']) debe devolver false
        // ideas(['hola', 'buena', 'lobo', 4, 5, ]) debe devolver true
        // Tu código aca:
        //const elLobo = array.filter(elemento => elemento === 'lobo');
        //let estaSiNo = false;
        if (array.includes('lobo')) return true;
        return false;
}

let arr1 = ['casa', 'avión', 'tigre', 'peras', 'loro'];
let arr2 = ['edificio', 'canoa', 'lobo', 'liz', 'loro'];
//
let estaElLobo1 = loboEstaONoEsta(arr1);
let estaElLobo2 = loboEstaONoEsta(arr2);
//
console.log(estaElLobo1);
console.log(estaElLobo2);
// *** Algoritmos de JS y Estructura de Datos ***
// Crea cadenas usando plantillas literales... ( Solución III )

const result = {
        success: [ "max-length", "no-amd", "prefer-arrow-functions" ], 
        failure: [ "no-var", "var-on-top", "linebreak" ], 
        skipped: [ "no-extra-semi", "no-dup-keys" ]
};

function makeList(arr) {
        "use strict";
        const failureItems = arr.map(item => `<li class="text-warning">${ item }</li>`);

        return failureItems;
}

const failureList = makeList(result.failure);

console.log(failureList);
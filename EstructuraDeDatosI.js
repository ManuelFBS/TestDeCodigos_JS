// *** Algoritmos de JS y Estructura de Datos ***
// Crea cadenas usando plantillas literales... ( Solución I )

const result = {
        success: [ "max-length", "no-amd", "prefer-arrow-functions" ], 
        failure: [ "no-var", "var-on-top", "linebreak" ], 
        skipped: [ "no-extra-semi", "no-dup-keys" ]
};

function makeList(arr) {
        "use strict";
        const failureItems = [];
        for (let i = 0; i < arr.length; i++) {
                failureItems.push(`<li class="text-warning">${ arr[i] }</li>`);
        }

        return failureItems;
}

const failureList = makeList(result.failure);

console.log(failureList);
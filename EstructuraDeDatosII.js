// *** Algoritmos de JS y Estructura de Datos ***
// Crea cadenas usando plantillas literales... ( Solución II )

const result = {
        success: [ "max-length", "no-amd", "prefer-arrow-functions" ], 
        failure: [ "no-var", "var-on-top", "linebreak" ], 
        skipped: [ "no-extra-semi", "no-dup-keys" ]
};

function makeList(arr) {
        "use strict";
        const failureItems = [];
        let n = 0;
        while (n < arr.length) {
                failureItems.push(`<li> class="text-warning">${ arr[n] }</li>`);
                n++;
        }

        return failureItems;
}

const failureList = makeList(result.failure);

console.log(failureList);
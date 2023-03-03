// Nombre de Propiedad Calculado...
/*El nombre de propiedad calculado es otra funcionalidad 
de objectos literales que también funciona al desestructurar. 
Puedes especificar el nombre de una propiedad a través de
una expresión si la pones entre corchetes:*/

let prop = "nombre";

let { [ prop ] : nomb } = {
        nombre: "Angie", 
        pais: "Sudáfrica", 
        trabajo: "Ingeniero de Software"
};

console.log(nomb);
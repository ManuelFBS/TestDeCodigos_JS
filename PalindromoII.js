// *** Comprobador de palíndromos *** //
/*Devuelve true si la cadena proporcionada es un palíndromo. De lo contrario, devuelve 
false. Un palíndromo es una palabra o frase que se escribe de la misma manera hacia 
adelante y hacia atrás, ignorando la puntuación, mayúsculas, minúsculas y espaciado.*/

function palindrome(str) {
        // Se eliminan todos los caracteres especiales y se pasa todo minúsculas...
        let strMod = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();

        // A continuación, se transforma en un array de caracteres, se
        // invierte su orden y finalmente se vuelven a unir los caracteres...
        let strPal = strMod.split('').reverse().join('');
      
        if (strMod === strPal) return true;
        else return false;
      }
      
// let palin = palindrome("_eye");     // Devuelve true...
// let palin = palindrome("eyes");     // Devuelve false...
let palin = palindrome("Luz Azul");     // Devuelve true

console.log(palin);
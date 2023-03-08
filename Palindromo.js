function palindromo(str) {
        let stringPal = str.split('').reverse().join('');
        
        if (str === stringPal) return true;
        else return false;
}

let palin = palindromo("eye");

console.log(palin);
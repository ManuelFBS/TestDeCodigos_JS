const s = [5, 7, 2];

function editarEnSitio() {
        s.pop();
        s.unshift(2);
}

editarEnSitio();
console.log(s);
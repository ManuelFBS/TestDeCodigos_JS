function fakeBinary2(string) {
        let arrString = string.split('');
        for (let i = 0; i < arrString.length; i++) {
                if (parseInt(arrString[i]) < 5) arrString[i] = '0';
                else arrString[i] = '1';
        }
        return arrString.join('');
}

// let string = '42587';
// let arrString = string.split('');
// for (let i = 0; i < arrString.length; i++) {
//         if (parseInt(arrString[i]) < 5) arrString[i] = '0';
//         else arrString[i] = '1';
// }
// return arrString.join('');
let fakeBin = fakeBinary2('4932769');
console.log('4932769');
console.log(fakeBin);
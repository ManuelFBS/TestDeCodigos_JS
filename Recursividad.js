function countUp(num) {
        if (num < 1) {
                return []; 
        }
        else {
                const countArray = countUp(num - 1);
                countArray.push(num);
                return countArray;
        }
}

let counter = countUp(5);

console.log(counter);
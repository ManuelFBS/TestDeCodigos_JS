function countDown(num) {
        if (num < 1) {
                return []; 
        }
        else {
                const countArray = countDown(num - 1);
                countArray.splice(0, 0, num);
                return countArray;
        }
}

let counter = countDown(5);

console.log(counter);
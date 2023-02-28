function countDown(num) {
        return num < 1 ? [] : [num, ...countDown(num - 1)];
}

let counter = countDown(5);

console.log(counter);
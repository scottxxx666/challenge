'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(str => str.trim());

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the miniMaxSum function below.
 */
function miniMaxSum(arr) {
    let sumArr = [];
    for (let i = 0; i < arr.length; i++) {
        let array = arr.slice();
        array.splice(i, 1)
        const sum = array.reduce((sum, item) => sum + item);
        sumArr[i] = sum;
    }
    const min = Math.min(...sumArr);
    const max = Math.max(...sumArr);
    console.log(`${min} ${max}`);
}

function main() {
    const arr = readLine().split(' ').map(arrTemp => parseInt(arrTemp, 10));

    miniMaxSum(arr);
}

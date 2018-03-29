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
    const sorted = arr.sort();
    const min = sorted.slice(0, -1).reduce(sum);
    const max = sorted.slice(1).reduce(sum);;
    console.log(`${min} ${max}`);
}

function sum(a, b) {
    return a + b;
}

function main() {
    const arr = readLine().split(' ').map(arrTemp => parseInt(arrTemp, 10));

    miniMaxSum(arr);
}

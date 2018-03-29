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
    let sumArr = arr.map((item, index, array) => {
        const arr = array.slice();
        arr.splice(index, 1);
        return arr.reduce((sum, item) => sum + item);
    });
    const min = Math.min(...sumArr);
    const max = Math.max(...sumArr);
    console.log(`${min} ${max}`);
}

function main() {
    const arr = readLine().split(' ').map(arrTemp => parseInt(arrTemp, 10));

    miniMaxSum(arr);
}

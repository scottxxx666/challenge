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
 * Complete the staircase function below.
 */
function staircase(n) {
    for (let i = 1; i <= n; i++) {
        let string = '#'.repeat(i).padStart(n);
        console.log(string);
    }
}

function main() {
    const n = parseInt(readLine(), 10);
    staircase(n);
}

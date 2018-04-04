'use strict';

const fs = require('fs');

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
 * Complete the getTotalX function below.
 */
function getTotalX(a, b) {
    /*
     * Write your code here.
     */
     const min = Math.max(...a);
     const max = Math.min(...b);
     let count = 0;
     for (let i = min; i <= max; i++) {
         const caseA = a.reduce((pre, cur) => pre && (i % cur === 0), true);
         const caseB = b.reduce((pre, cur) => pre && (cur % i === 0), true);
         if (caseA && caseB) {
            count++;
         }
     }
     return count;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);
    const nm = readLine().split(' ');
    const n = parseInt(nm[0], 10);
    const m = parseInt(nm[1], 10);
    const a = readLine().split(' ').map(aTemp => parseInt(aTemp, 10));
    const b = readLine().split(' ').map(bTemp => parseInt(bTemp, 10));
    let total = getTotalX(a, b);

    ws.write(total + "\n");
    ws.end();
}


module.exports = getTotalX;
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
 * Complete the breakingRecords function below.
 */
function breakingRecords(score) {
    /*
     * Write your code here.
     */
     let breakMax = 0;
     let breakMin = 0;
     score.reduce((pre, cur) => {
        if (cur > pre) {
            breakMax++;
            return cur;
        }
        return pre;
     });
     score.reduce((pre, cur) => {
        if (cur < pre) {
            breakMin++;
            return cur;
        }
        return pre;
     });
     return [breakMax, breakMin];
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine(), 10);

    const score = readLine().split(' ').map(scoreTemp => parseInt(scoreTemp, 10));

    let result = breakingRecords(score);

    ws.write(result.join(" ") + "\n");

    ws.end();
}

module.exports = breakingRecords;

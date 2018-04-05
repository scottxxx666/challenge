'use strict';
process.stdin.resume();
process.stdin.setEncoding('ascii');

var input_stdin = "";
var input_stdin_array = "";
var input_currentline = 0;

process.stdin.on('data', function (data) {
    input_stdin += data;
});

process.stdin.on('end', function () {
    input_stdin_array = input_stdin.split("\n");
    main();
});

function readLine() {
    return input_stdin_array[input_currentline++];
}

/////////////// ignore above this line ////////////////////

function beautifulDays(i, j, k) {
    // Complete this function
    let length = j - i + 1;
    return Array.from(Array(length), (x, index) => i + index).filter(x => Math.abs(x - reverse(x)) % k === 0).length;
}

function reverse(i) {
    return Number([...i.toString()].reverse().join(''));
}

function main() {
    var i_temp = readLine().split(' ');
    var i = parseInt(i_temp[0]);
    var j = parseInt(i_temp[1]);
    var k = parseInt(i_temp[2]);
    var result = beautifulDays(i, j, k);
    process.stdout.write("" + result + "\n");
}

module.exports = beautifulDays;

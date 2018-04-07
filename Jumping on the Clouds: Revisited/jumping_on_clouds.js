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

function jumpingOnClouds(c, k) {
    // Complete this function
    let i = 0;
    let energy = 100;
    do {
        i = (i + k) % c.length;
        energy--;
        if (c[i] === 1) {
            energy -= 2;
        }
    } while (i !== 0 && energy > 0)
    return energy;
}

function main() {
    var n_temp = readLine().split(' ');
    var n = parseInt(n_temp[0]);
    var k = parseInt(n_temp[1]);
    var c = readLine().split(' ');
    c = c.map(Number);
    var result = jumpingOnClouds(c, k);
    process.stdout.write("" + result + "\n");

}

module.exports = jumpingOnClouds;

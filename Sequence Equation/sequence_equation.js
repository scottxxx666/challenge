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

function permutationEquation(p) {
    // Complete this function
    const serial = Array(p.length).fill().map((x, i) => i + 1);
    return serial.map(i => p.findIndex(x => x === p.findIndex(x => x === i) + 1) + 1);
}

function permutationEquation2(p) {
    // Complete this function
    return Array(p.length).fill().map((x, i) => p.findIndex(x => x === p.findIndex(x => x === (i + 1)) + 1) + 1);
}

function main() {
    var n = parseInt(readLine());
    p = readLine().split(' ');
    p = p.map(Number);
    var result = permutationEquation(p);
    console.log(result.join("\n"));
}

module.exports = {
    permutationEquation: permutationEquation
};

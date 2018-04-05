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
    let count = 0;
    for (let day = i; day <= j; day++) {
        if ((Math.abs(day - reverse(day)) % k === 0)) {
            count++;
        }
    }
    return count;
}

function reverse(i) {
    return parseInt(Array.from(i.toString()).reverse().join(''), 10);
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

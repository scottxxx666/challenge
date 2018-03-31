'use strict';

let _input = '';

function processData(input) {
    const lines = _input.split("\n");
    const size = parseInt(lines[0]);
    let dictionary = importDictionary(size, lines);
    for (let i = size + 1; i < lines.length; i++) {
        console.log(search(dictionary, lines[i]));
    }
}

function importDictionary(size, lines) {
    let dictionary = [];
    for (let i = 1; i <= size; i++) {
        const row = lines[i].split(' ');
        const name = row[0];
        const phone = row[1];
        dictionary[name] = phone;
    }
    return dictionary;
}

function search(dictionary, name) {
    return dictionary[name] ? `${name}=${dictionary[name]}` : 'Not found';
}

process.stdin.resume();
process.stdin.setEncoding("ascii");
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
   processData(_input);
});

// 'use strict';\n
// let arr = ['Steve', 'Heather', 'Atlas', 'Lily'];\n
// let arrLoop = arr.forEach(person => {\n
//     console.log(person);\n
// });\n

'use strict';
const fs = require('fs');

let buffer = Buffer.from([]);

// let bufferOne = new Buffer('\'use strict\';\\n')
// let bufferTwo = new Buffer('let arr = [\'Steve', 'Heather', 'Atlas', 'Lily\'];\\n')
// let bufferThree = Buffer.concat([bufferOne, bufferTwo]);

let bufferOne = new Buffer('\'use strict\';\n');
let bufferTwo = new Buffer('let arr = [\'Steve\', \'Heather\', \'Atlas\', \'Lily\'];\n');
let bufferThree = new Buffer('arr.forEach(person => {\n');
let bufferFour = new Buffer('console.log(person);\n');
let bufferFive = new Buffer('});\n');


let arr = [bufferOne, bufferTwo, bufferThree, bufferFour, bufferFive];

let finalBuffer = Buffer.concat(arr);

fs.writeFile('./files/loop.js', finalBuffer, (err) => {
    if(err) throw err;
    console.log('The file has been created.', buffer);
});

// fs.readFile('./files/loop.js', (err, data) => {
//     if (err) throw err;
//     console.log('From loop.js forEach', data);
// });

// fs.writeFile('./files/loop.js', data, (err) => {
//     if (err) throw err;
//     console.log('I am supposed to print this data on index.js', data);
// })
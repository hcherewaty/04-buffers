'use strict';
const fs = require('fs');

let buffer = Buffer.from([]);

let bufferOne = new Buffer('\'use strict\';\n');
let bufferTwo = new Buffer('let arr = [\'Steve\', \'Heather\', \'Atlas\', \'Lily\'];\n');
let bufferThree = new Buffer('arr.forEach(person => {\n');
let bufferFour = new Buffer('console.log(person);\n');
let bufferFive = new Buffer('});\n');


let arr = [bufferOne, bufferTwo, bufferThree, bufferFour, bufferFive];

let finalBuffer = Buffer.concat(arr);

fs.writeFile('./files/loop.js', finalBuffer, (err) => {
    if(err) throw err;
    // console.log('The file has been created.', buffer);
});

let articleStart = new Buffer('<article>');
let articleEnd = new Buffer('</article>');

let hThreeStart = new Buffer('<h3>');
let hThreeEnd = new Buffer('</h3>');

let slash = 0x5c;


fs.readFile('./files/pair-programming.txt', (err, data) => {
    if (err) throw err;
    // console.log('I am trying to do a read..', data);

    let articleWrap = Buffer.concat([articleStart, data, articleEnd]);

    // let firstSlice = data.indexOf(slash);
    // console.log(firstSlice);
   
        data.splice(1, 0, 'Meow');
        console.log(data);
    

fs.writeFile('./files/pair-programming.html', articleWrap, (err) => {
    if(err) throw err;
    // console.log('I did a read, I did a wrap around text.');
});

});
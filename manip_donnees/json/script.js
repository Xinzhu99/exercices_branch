const fs = require('fs');
const filepath = './data.json';

const content = fs.readFileSync(filepath, { encoding: 'utf8', flag: 'r' });
const data = JSON.parse(content);

console.log(typeof data);
console.log(data[0]);
console.log(data.length);
console.log(data[4])

let age = 0;
for (const item of data) {
    age += item.age;
}
let average = age / data.length;
console.log(average);

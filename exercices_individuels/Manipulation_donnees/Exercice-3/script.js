const fs = require('fs');
const filepath = 'data.json';

const content = fs.readFileSync(filepath, {encoding: 'utf8', flag: 'r'});
const data = JSON.parse(content);
// write your code bellow

// 1-
console.log("Type of data : ", typeof data )

// 2-
console.log("premier element du tableau : ", data[0])

// 3-
console.log(data.length)

// 4-
console.log (data[4])

// 5-
// const totalAge = data.reduce((sum, candidate) => sum + candidate.age, 0)
// const averageAge = totalAge / data.length

let sommeAge = 0
for (let i = 0; i < data.length; i++) {
    sommeAge += data[i].age;
}
const avg = sommeAge / data.length
console.log(avg)

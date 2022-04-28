const arr = [1, 2, 3, 4, 5, 6];

let double = arr.map( x => x * 2 )

let even = arr.filter( x => x % 2 == 0 )

let sum = arr.reduce((a , b) => a + b)

console.log(double)
console.log(even)
console.log(sum)
let myArr: number[] = [1, 2, 3];

myArr.push(5); // [1,2,3,5]

// myArr.push('sandiwch');

let myNum = myArr[1];
console.log(typeof myNum); // number

// methods: they're all the same as JS
myArr.includes(5); // true

myArr.forEach((i) => console.log(i));

// multiple types
let myThings: (boolean | number)[] = [];
myThings.push(3);
myThings.push(true);
myThings.push(false);
myThings.push(99);
// myThings.push('some string') Error

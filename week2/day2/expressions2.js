// Arrow functions

const myArrow = () => {
  console.log('this is an arrow function!');
};

myArrow();

const oneArg = (arg1) => {
  console.log(`The argument is ${arg1}`);
};

oneArg('chicken');

const multiArg = (arg1, arg2, arg3) => {
  console.log(`The argument is ${arg1}`);
  console.log(`The argument is ${arg2}`);
  console.log(`The argument is ${arg3}`);
};

multiArg('one', 'two', 'three'); // returns undefined
// The argument is one
// The argument is two
// The argument is three

// implicit return
const oneLiner = (num) => num + 10; // returns num + 10

oneLiner(5); // 15 - does not console log!

const result = oneLiner(9);
console.log(result); // 19

// // callback function

// function myParentFunc(func) {
//   console.log('this is the parent');
//   func();
// }

// // myArrow is the callback
// myParentFunc(myArrow);

// //
// myParentFunc(() => console.log('hello from anonymous callback'));

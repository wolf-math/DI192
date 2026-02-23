function square(num) {
  return num ** 2;
}

let mySquare = square(4); // 16

console.log(mySquare + 8);

// If a function does not have a return statement it returns `undefined`

function blah() {
  console.log('blah'); // this line is unneccesary
}

const whatever = blah(); // undefined

// function with multiple returns
// the right way

function number(num) {
  // edge cases come first!
  if (typeof num !== 'number') {
    return; // return undefined
  }

  if (num % 2 === 0) {
    return 'Even';
  }
  return 'Odd';
}

const result = number('hello');

console.log(result);

// the wrong way

function broken() {
  return "the next one doesn't work";

  return 'nope';
}

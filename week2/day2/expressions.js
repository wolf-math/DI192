function functionDefition() {
  console.log('this is a function definition!');
}

functionDefition();

// This is a function expression
// even though it console logs that it's a definition
const functionDefitionExpression = functionDefition;
functionDefitionExpression();

const functionExpression = function () {
  console.log('This is a function expression!');
};

functionExpression();

// example of why?
const myObj = {
  name: 'Bob',
  age: 22,
  myFunc: functionDefition
};

myObj.myFunc(); // console.logs "this is a function definition!"
